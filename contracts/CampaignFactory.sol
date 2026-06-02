// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./Campaign.sol";

contract CampaignFactory {
    address[] private campaigns;

    event CampaignCreated(
        address indexed campaign,
        address indexed creator,
        address indexed recipient,
        string title,
        uint256 goal
    );

    function createCampaign(
        address recipient,
        string calldata title,
        string calldata description,
        uint256 goal,
        string[] calldata milestoneTitles,
        uint256[] calldata milestoneAmounts,
        string[] calldata milestoneDescriptions,
        uint256[] calldata milestoneDeadlines
    ) external returns (address campaignAddress) {
        Campaign campaign = new Campaign(
            msg.sender,
            recipient,
            title,
            description,
            goal,
            milestoneTitles,
            milestoneAmounts,
            milestoneDescriptions,
            milestoneDeadlines
        );

        campaignAddress = address(campaign);
        campaigns.push(campaignAddress);

        emit CampaignCreated(campaignAddress, msg.sender, recipient, title, goal);
    }

    function allCampaigns() external view returns (address[] memory) {
        return campaigns;
    }

    function campaignCount() external view returns (uint256) {
        return campaigns.length;
    }
}
