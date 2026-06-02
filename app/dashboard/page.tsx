import { FilePlus2, LockKeyhole, Megaphone, Send } from "lucide-react";
import { CampaignCard } from "@/components/campaign-card";
import { campaigns, currency } from "@/lib/campaigns";

export const metadata = {
  title: "Dashboard"
};

export default function DashboardPage() {
  const activeCampaign = campaigns[0];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
          Creator dashboard
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold text-forest">
          Manage campaigns with proof
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
          <ActionCard
            icon={LockKeyhole}
            title="Release milestone funds"
            body={`Next eligible milestone: ${activeCampaign.milestones[1].title} (${currency(activeCampaign.milestones[1].amount)})`}
          />
          <ActionCard
            icon={FilePlus2}
            title="Upload expense receipt"
            body="Attach a PDF or image, pin it to IPFS, and log the hash on-chain."
          />
          <ActionCard
            icon={Megaphone}
            title="Post public update"
            body="Share progress notes with donors and community reviewers."
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-forest">My campaigns</h2>
            <div className="mt-5">
              <CampaignCard campaign={activeCampaign} />
            </div>
          </div>
          <div className="rounded-lg border border-forest/10 bg-white p-6">
            <h2 className="font-display text-3xl font-bold text-forest">Quick action</h2>
            <div className="mt-6 grid gap-5">
              <label>
                <span className="text-sm font-bold text-forest">Expense description</span>
                <input className="focus-ring mt-2 w-full rounded-md border border-forest/15 bg-sand/35 px-4 py-3 text-sm outline-none" />
              </label>
              <label>
                <span className="text-sm font-bold text-forest">Amount</span>
                <input className="focus-ring mt-2 w-full rounded-md border border-forest/15 bg-sand/35 px-4 py-3 text-sm outline-none" />
              </label>
              <label>
                <span className="text-sm font-bold text-forest">IPFS receipt hash</span>
                <input className="focus-ring mt-2 w-full rounded-md border border-forest/15 bg-sand/35 px-4 py-3 text-sm outline-none" />
              </label>
              <button
                type="button"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-bold text-white"
              >
                <Send size={16} aria-hidden="true" />
                Log expense on-chain
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionCard({
  icon: Icon,
  title,
  body
}: {
  icon: typeof LockKeyhole;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
      <Icon className="text-gold" size={32} aria-hidden="true" />
      <h2 className="mt-5 text-xl font-bold text-forest">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-charcoal/70">{body}</p>
    </div>
  );
}
