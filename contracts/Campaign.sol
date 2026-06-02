// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Campaign is Ownable, ReentrancyGuard {
    struct Milestone {
        string title;
        string description;
        uint256 amount;
        uint256 deadline;
        uint256 fundedAmount;
        bool approved;
        bool released;
    }

    struct Expense {
        string description;
        string ipfsHash;
        uint256 amount;
        uint256 createdAt;
    }

    string public title;
    string public description;
    uint256 public goal;
    uint256 public totalRaised;
    address public immutable recipient;

    Milestone[] private milestones;
    Expense[] private expenses;

    event DonationReceived(
        address indexed donor,
        uint256 amount,
        uint256 milestoneId,
        uint256 totalRaised
    );
    event MilestoneApproved(uint256 indexed milestoneId);
    event MilestoneReleased(uint256 indexed milestoneId, address indexed recipient, uint256 amount);
    event ExpenseLogged(uint256 indexed expenseId, uint256 amount, string ipfsHash);

    constructor(
        address creator,
        address campaignRecipient,
        string memory campaignTitle,
        string memory campaignDescription,
        uint256 campaignGoal,
        string[] memory milestoneTitles,
        uint256[] memory milestoneAmounts,
        string[] memory milestoneDescriptions,
        uint256[] memory milestoneDeadlines
    ) Ownable(creator) {
        require(campaignRecipient != address(0), "Recipient required");
        require(campaignGoal > 0, "Goal required");
        require(milestoneTitles.length > 0, "Milestones required");
        require(
            milestoneTitles.length == milestoneAmounts.length &&
                milestoneTitles.length == milestoneDescriptions.length &&
                milestoneTitles.length == milestoneDeadlines.length,
            "Milestone length mismatch"
        );

        title = campaignTitle;
        description = campaignDescription;
        goal = campaignGoal;
        recipient = campaignRecipient;

        for (uint256 i = 0; i < milestoneTitles.length; i++) {
            require(milestoneAmounts[i] > 0, "Milestone amount required");
            milestones.push(
                Milestone({
                    title: milestoneTitles[i],
                    description: milestoneDescriptions[i],
                    amount: milestoneAmounts[i],
                    deadline: milestoneDeadlines[i],
                    fundedAmount: 0,
                    approved: false,
                    released: false
                })
            );
        }
    }

    receive() external payable {
        donate(type(uint256).max);
    }

    function donate(uint256 milestoneId) public payable nonReentrant {
        require(msg.value > 0, "Donation required");
        totalRaised += msg.value;

        if (milestoneId < milestones.length) {
            milestones[milestoneId].fundedAmount += msg.value;
        }

        emit DonationReceived(msg.sender, msg.value, milestoneId, totalRaised);
    }

    function approveMilestone(uint256 milestoneId) external onlyOwner {
        Milestone storage milestone = _milestone(milestoneId);
        require(!milestone.released, "Already released");
        milestone.approved = true;

        emit MilestoneApproved(milestoneId);
    }

    function releaseMilestone(uint256 milestoneId) external onlyOwner nonReentrant {
        Milestone storage milestone = _milestone(milestoneId);
        require(milestone.approved, "Milestone not approved");
        require(!milestone.released, "Already released");
        require(address(this).balance >= milestone.amount, "Insufficient balance");

        milestone.released = true;

        (bool success, ) = recipient.call{value: milestone.amount}("");
        require(success, "Transfer failed");

        emit MilestoneReleased(milestoneId, recipient, milestone.amount);
    }

    function logExpense(
        string calldata expenseDescription,
        string calldata ipfsHash,
        uint256 amount
    ) external onlyOwner {
        require(bytes(expenseDescription).length > 0, "Description required");
        require(bytes(ipfsHash).length > 0, "IPFS hash required");
        require(amount > 0, "Amount required");

        expenses.push(
            Expense({
                description: expenseDescription,
                ipfsHash: ipfsHash,
                amount: amount,
                createdAt: block.timestamp
            })
        );

        emit ExpenseLogged(expenses.length - 1, amount, ipfsHash);
    }

    function getMilestones() external view returns (Milestone[] memory) {
        return milestones;
    }

    function getExpenses() external view returns (Expense[] memory) {
        return expenses;
    }

    function milestoneCount() external view returns (uint256) {
        return milestones.length;
    }

    function expenseCount() external view returns (uint256) {
        return expenses.length;
    }

    function _milestone(uint256 milestoneId) private view returns (Milestone storage) {
        require(milestoneId < milestones.length, "Invalid milestone");
        return milestones[milestoneId];
    }
}
