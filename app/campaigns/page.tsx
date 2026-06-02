import { Search, SlidersHorizontal } from "lucide-react";
import { CampaignCard } from "@/components/campaign-card";
import { campaigns } from "@/lib/campaigns";

const filters = ["All", "Education", "Health", "Environment", "Disaster Relief", "Active", "Funded"];

export const metadata = {
  title: "Campaigns"
};

export default function CampaignsPage() {
  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
              Discover
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-forest">
              Transparent campaigns
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/70">
              Browse live campaigns with milestone budgets, receipt proofs, and
              public transaction trails.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-forest/10 bg-white p-3">
            <Search size={18} className="text-forest/50" aria-hidden="true" />
            <input
              aria-label="Search campaigns"
              placeholder="Search campaign, country, category"
              className="w-full bg-transparent text-sm outline-none placeholder:text-charcoal/40 lg:w-80"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="focus-ring rounded-full border border-forest/10 bg-white px-4 py-2 text-sm font-bold text-forest transition hover:border-forest/35"
            >
              {filter}
            </button>
          ))}
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-white"
          >
            <SlidersHorizontal size={16} aria-hidden="true" />
            Sort by raised
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
}
