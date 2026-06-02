import { Activity, BarChart3, Search } from "lucide-react";
import { campaigns, currency, stats } from "@/lib/campaigns";

export const metadata = {
  title: "Transparency"
};

const ledger = campaigns.flatMap((campaign) => [
  ...campaign.donors.map((donor) => ({
    type: "Donation",
    campaign: campaign.title,
    amount: donor.amount,
    proof: donor.txHash
  })),
  ...campaign.expenses.map((expense) => ({
    type: "Expense",
    campaign: campaign.title,
    amount: expense.amount,
    proof: expense.ipfsHash
  }))
]);

export default function TransparencyPage() {
  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
              Global ledger
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-forest">
              Every movement of funds, searchable.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/70">
              A public dashboard for donations, milestone releases, expenses,
              receipt proofs, and regional impact analytics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-white p-5 shadow-sm">
                <p className="font-display text-3xl font-bold text-forest">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-charcoal/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-lg border border-forest/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-gold" size={30} aria-hidden="true" />
              <h2 className="font-display text-3xl font-bold text-forest">Analytics</h2>
            </div>
            <div className="mt-6 grid gap-4">
              {["Health", "Education", "Disaster Relief"].map((label, index) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm font-bold text-forest">
                    <span>{label}</span>
                    <span>{[42, 31, 27][index]}%</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-sand">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: `${[42, 31, 27][index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-forest/10 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Activity className="text-gold" size={30} aria-hidden="true" />
                <h2 className="font-display text-3xl font-bold text-forest">Ledger</h2>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-forest/10 bg-sand/35 px-3 py-2">
                <Search size={16} className="text-charcoal/45" aria-hidden="true" />
                <input
                  aria-label="Search ledger"
                  className="bg-transparent text-sm outline-none"
                  placeholder="Search address or proof"
                />
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-forest/10">
              {ledger.map((entry) => (
                <div key={`${entry.type}-${entry.proof}`} className="grid gap-3 border-b border-forest/10 p-4 last:border-b-0 md:grid-cols-[0.7fr_1.4fr_0.7fr]">
                  <p className="font-bold text-forest">{entry.type}</p>
                  <p className="text-sm text-charcoal/70">{entry.campaign}</p>
                  <div className="md:text-right">
                    <p className="font-bold text-terracotta">{currency(entry.amount)}</p>
                    <p className="mt-1 text-xs text-charcoal/50">{entry.proof}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
