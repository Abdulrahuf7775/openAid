import { notFound } from "next/navigation";
import { Activity, FileText, HeartHandshake, ReceiptText, Users } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { campaigns, currency, getCampaign, progressFor } from "@/lib/campaigns";

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ id: campaign.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const campaign = getCampaign(params.id);

  return {
    title: campaign?.title ?? "Campaign"
  };
}

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const campaign = getCampaign(params.id);

  if (!campaign) {
    notFound();
  }

  const progress = progressFor(campaign);

  return (
    <section className="bg-sand">
      <div className={`bg-gradient-to-br ${campaign.imageTone} african-pattern text-white`}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/75">
            {campaign.category} / {campaign.location}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight">
            {campaign.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{campaign.summary}</p>
          <div className="mt-8 max-w-2xl rounded-lg bg-white/90 p-5 text-charcoal shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-3xl font-bold text-forest">{currency(campaign.raised)}</p>
                <p className="text-sm text-charcoal/60">raised of {currency(campaign.goal)}</p>
              </div>
              <button
                type="button"
                className="focus-ring rounded-md bg-gold px-6 py-3 text-sm font-bold text-forest transition hover:bg-[#ffc15a]"
              >
                Donate to milestone
              </button>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-forest/10">
              <div className="h-full rounded-full bg-forest" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.55fr_0.85fr] lg:px-8">
        <div className="space-y-6">
          <Panel icon={HeartHandshake} title="Overview">
            <p className="text-lg leading-8 text-charcoal/75">{campaign.story}</p>
          </Panel>

          <Panel icon={Activity} title="Milestones">
            <div className="grid gap-4">
              {campaign.milestones.map((milestone) => (
                <div key={milestone.title} className="rounded-lg border border-forest/10 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-forest">{milestone.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-charcoal/65">{milestone.description}</p>
                    </div>
                    <StatusBadge status={milestone.status} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-charcoal/65">
                    <span>{currency(milestone.amount)}</span>
                    <span>Deadline: {milestone.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel icon={ReceiptText} title="Expenses & Receipts">
            {campaign.expenses.length > 0 ? (
              <div className="grid gap-3">
                {campaign.expenses.map((expense) => (
                  <div key={expense.ipfsHash} className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4">
                    <div>
                      <p className="font-bold text-forest">{expense.description}</p>
                      <p className="mt-1 text-sm text-charcoal/60">
                        {expense.date} / IPFS {expense.ipfsHash}
                      </p>
                    </div>
                    <p className="font-bold text-terracotta">{currency(expense.amount)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState text="No expenses have been submitted yet." />
            )}
          </Panel>
        </div>

        <aside className="space-y-6">
          <Panel icon={Users} title="Donors">
            <div className="grid gap-3">
              {campaign.donors.map((donor) => (
                <div key={donor.txHash} className="rounded-lg bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-forest">{donor.name}</p>
                    <p className="font-bold text-terracotta">{currency(donor.amount)}</p>
                  </div>
                  <p className="mt-1 text-xs text-charcoal/55">{donor.txHash}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel icon={FileText} title="On-chain activity">
            <div className="grid gap-3 text-sm text-charcoal/70">
              <span>Contract: {campaign.contractAddress}</span>
              <span>Donation events: {campaign.donors.length}</span>
              <span>Expense events: {campaign.expenses.length}</span>
              <span>Milestone events: {campaign.milestones.length}</span>
            </div>
          </Panel>

          <Panel icon={FileText} title="Updates">
            <div className="grid gap-3">
              {campaign.updates.map((update) => (
                <div key={update.title} className="rounded-lg bg-white p-4">
                  <p className="font-bold text-forest">{update.title}</p>
                  <p className="mt-1 text-xs text-charcoal/55">{update.date}</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{update.body}</p>
                </div>
              ))}
            </div>
          </Panel>
        </aside>
      </div>
    </section>
  );
}

function Panel({
  icon: Icon,
  title,
  children
}: {
  icon: typeof Activity;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-forest/10 bg-sand/60 p-5">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-gold">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-bold text-forest">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-dashed border-forest/20 bg-white p-6 text-center text-sm font-semibold text-charcoal/60">
      {text}
    </div>
  );
}
