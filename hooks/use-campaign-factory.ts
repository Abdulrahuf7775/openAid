"use client";

import { useWriteContract } from "wagmi";
import { campaignFactoryAbi, campaignFactoryAddress } from "@/lib/contracts";

export function useCampaignFactory() {
  const write = useWriteContract();

  return {
    ...write,
    createCampaign: (args: readonly unknown[]) =>
      write.writeContract({
        address: campaignFactoryAddress as `0x${string}`,
        abi: campaignFactoryAbi,
        functionName: "createCampaign",
        args: args as never
      })
  };
}
