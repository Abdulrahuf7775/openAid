import { MilestoneStatus } from "@/lib/campaigns";
import { cn } from "@/lib/utils";

const colors: Record<MilestoneStatus, string> = {
  Completed: "bg-emerald-100 text-emerald-800",
  Funded: "bg-blue-100 text-blue-800",
  Pending: "bg-amber-100 text-amber-800"
};

export function StatusBadge({ status }: { status: MilestoneStatus }) {
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-bold", colors[status])}>
      {status}
    </span>
  );
}
