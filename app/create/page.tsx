import { CalendarDays, FileUp, Landmark, Plus, WalletCards } from "lucide-react";

export const metadata = {
  title: "Create Campaign"
};

const steps = [
  { title: "Basic info", icon: Landmark },
  { title: "Milestones", icon: CalendarDays },
  { title: "Team wallet", icon: WalletCards },
  { title: "Verification", icon: FileUp }
];

export default function CreateCampaignPage() {
  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
          Campaign builder
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold text-forest">
          Create a milestone-funded campaign
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/70">
          This MVP form is ready for wallet deployment, IPFS uploads, and
          contract creation hooks.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-forest/10 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-gold">
                    <step.icon size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/45">
                      Step {index + 1}
                    </p>
                    <p className="font-bold text-forest">{step.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="rounded-lg border border-forest/10 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Campaign title" placeholder="Solar clinic in Kaduna" />
              <Field label="Funding goal" placeholder="52000" />
              <Field label="Category" placeholder="Health" />
              <Field label="Location" placeholder="Kaduna, Nigeria" />
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-forest">Impact story</span>
              <textarea
                className="focus-ring mt-2 min-h-36 w-full rounded-md border border-forest/15 bg-sand/35 px-4 py-3 text-sm outline-none"
                placeholder="Explain the problem, community, milestones, and verification approach."
              />
            </label>

            <div className="mt-6 rounded-lg bg-sand/60 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-bold text-forest">Milestones</h2>
                <button
                  type="button"
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2 text-sm font-bold text-white"
                >
                  <Plus size={16} aria-hidden="true" />
                  Add milestone
                </button>
              </div>
              <div className="mt-4 grid gap-4">
                <div className="grid gap-4 rounded-lg bg-white p-4 md:grid-cols-3">
                  <Field label="Title" placeholder="Equipment deposit" />
                  <Field label="Amount" placeholder="12000" />
                  <Field label="Deadline" placeholder="2026-07-15" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="Recipient wallet" placeholder="0x..." />
              <Field label="Verification document" placeholder="Upload via IPFS adapter" />
            </div>

            <button
              type="button"
              className="focus-ring mt-8 w-full rounded-md bg-gold px-6 py-4 text-sm font-bold text-forest transition hover:bg-[#ffc15a]"
            >
              Deploy campaign contract
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-forest">{label}</span>
      <input
        className="focus-ring mt-2 w-full rounded-md border border-forest/15 bg-sand/35 px-4 py-3 text-sm outline-none"
        placeholder={placeholder}
      />
    </label>
  );
}
