import { BadgeCheck, Shield, WalletCards } from "lucide-react";

export const metadata = {
  title: "Profile"
};

export default function ProfilePage() {
  const cards = [
    {
      title: "Wallet",
      body: "Connect a wallet to view donations, campaigns, and saved receipts.",
      icon: WalletCards
    },
    {
      title: "Verification",
      body: "Organizer verification documents will appear here after IPFS upload.",
      icon: BadgeCheck
    },
    {
      title: "Reputation",
      body: "Track public donor badges and campaign transparency history.",
      icon: Shield
    }
  ];

  return (
    <section className="bg-sand px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
          Profile
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold text-forest">
          Wallet identity and trust record
        </h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-forest/10 bg-white p-6">
              <Icon className="text-gold" size={32} aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold text-forest">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
