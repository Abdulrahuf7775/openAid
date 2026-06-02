export const campaignFactoryAddress =
  process.env.NEXT_PUBLIC_FACTORY_ADDRESS ?? "0x0000000000000000000000000000000000000000";

export const campaignFactoryAbi = [
  {
    type: "function",
    name: "createCampaign",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "goal", type: "uint256" },
      { name: "milestoneTitles", type: "string[]" },
      { name: "milestoneAmounts", type: "uint256[]" },
      { name: "milestoneDescriptions", type: "string[]" },
      { name: "milestoneDeadlines", type: "uint256[]" }
    ],
    outputs: [{ name: "campaignAddress", type: "address" }]
  },
  {
    type: "function",
    name: "allCampaigns",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "address[]" }]
  }
] as const;
