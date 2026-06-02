import { ArrowUpRight, BadgeCheck, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Campaign, currency, progressFor } from "@/lib/campaigns";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const progress = progressFor(campaign);

  return (
    <article className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`h-44 bg-gradient-to-br ${campaign.imageTone} african-pattern`} />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-forest/60">
          <span>{campaign.category}</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>{campaign.status}</span>
        </div>
        <h3 className="mt-3 min-h-[3.5rem] font-display text-2xl font-bold leading-tight text-forest">
          {campaign.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-charcoal/70">
          {campaign.summary}
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-forest/10">
          <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-bold text-forest">{currency(campaign.raised)}</span>
          <span className="text-charcoal/60">of {currency(campaign.goal)}</span>
        </div>

        <div className="mt-5 grid gap-3 text-sm text-charcoal/70">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-terracotta" aria-hidden="true" />
            {campaign.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-terracotta" aria-hidden="true" />
            {campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : "Funding complete"}
          </span>
          <span className="flex items-center gap-2">
            <BadgeCheck size={16} className="text-trust" aria-hidden="true" />
            {campaign.transparencyScore}% transparency score
          </span>
        </div>

        <Link
          href={`/campaigns/${campaign.id}`}
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-3 text-sm font-bold text-white transition hover:bg-forest/90"
        >
          View campaign
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
