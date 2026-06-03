import { ArrowRight, Blocks, FileCheck2, HandCoins, Landmark, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CampaignCard } from "@/components/campaign-card";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { campaigns, stats } from "@/lib/campaigns";

const steps = [
  {
    icon: HandCoins,
    title: "Donate to a campaign",
    body: "Support a verified cause using a connected wallet and choose a milestone when it matters."
  },
  {
    icon: Blocks,
    title: "Track on-chain",
    body: "Every donation and release emits a public event that can be inspected by anyone."
  },
  {
    icon: FileCheck2,
    title: "Verify receipts",
    body: "Project teams upload invoices and proof files to IPFS before reporting expenses."
  },
  {
    icon: Landmark,
    title: "Release by milestone",
    body: "Funds unlock in stages, reducing waste and increasing community confidence."
  }
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 african-pattern opacity-40" />
        <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-40 left-16 h-96 w-96 rounded-full bg-trust/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-gold">
              <ShieldCheck size={16} aria-hidden="true" />
              100% transparent on-chain giving
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
              Every Donation, Fully Visible. Every Impact, Fully Tracked.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              OpenAid Africa helps donors, communities, and grant managers follow
              funds from contribution to milestone release, receipt proof, and
              public impact update.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/create"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-bold text-forest transition hover:bg-[#ffc15a]"
              >
                Create Campaign
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/campaigns"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div className="glass rounded-lg border border-white/20 p-4 shadow-soft">
            <div className="rounded-md bg-white p-5 text-charcoal">
              <div className="flex items-center justify-between border-b border-forest/10 pb-4">
                <div>
                  <p className="text-sm font-bold text-forest">Live transparency feed</p>
                  <p className="text-xs text-charcoal/55">Sepolia simulation</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Live
                </span>
              </div>
              <div className="grid gap-4 py-5">
                {[
                  ["Donation", "$1,200", "Solar Power for Kaduna Clinic"],
                  ["Receipt", "$8,600", "Vendor mobilization invoice"],
                  ["Milestone", "$17,000", "Flood relief kit batch verified"],
                  ["Donation", "$250", "STEM Labs for Girls in Kigali"]
                ].map(([type, amount, label]) => (
                  <div key={`${type}-${label}`} className="flex items-center justify-between gap-4 rounded-md bg-sand/55 p-4">
                    <div>
                      <p className="text-sm font-bold text-forest">{type}</p>
                      <p className="mt-1 text-sm text-charcoal/65">{label}</p>
                    </div>
                    <p className="font-bold text-terracotta">{amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Problem to solution" title="Trust should not require blind faith.">
          Donation systems often hide the crucial middle: who received funds,
          which milestone was paid, and whether receipts exist. OpenAid makes
          that middle inspectable.
        </SectionHeading>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            ["Opaque spending", "Public on-chain payment history"],
            ["One-time fund dumps", "Milestone-based releases"],
            ["Private receipts", "IPFS proofs linked to expenses"]
          ].map(([problem, solution]) => (
            <div key={problem} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-terracotta">
                Replace
              </p>
              <p className="mt-3 text-xl font-bold text-charcoal">{problem}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-forest">
                With
              </p>
              <p className="mt-3 text-xl font-bold text-forest">{solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="A cleaner flow for accountable aid." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-lg border border-forest/10 p-6">
              <step.icon className="text-gold" size={34} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-forest">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured campaigns" title="Fund work you can follow." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

      <section className="bg-forest px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <MetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Social proof" title="Built for donors, organizers, and public stewards.">
            From local clinics to civic relief teams, every stakeholder gets the
            same source of truth.
          </SectionHeading>
          <div className="grid gap-4">
            {[
              "The public ledger changes how we report impact to diaspora donors.",
              "Milestone funding makes procurement conversations easier and calmer.",
              "Receipt proofs turn financial updates into something anyone can verify."
            ].map((quote) => (
              <blockquote key={quote} className="rounded-lg border border-forest/10 bg-sand/40 p-6 text-lg font-semibold leading-8 text-forest">
                &ldquo;{quote}&rdquo;
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
