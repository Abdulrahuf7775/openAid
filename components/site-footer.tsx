import { Github, Globe2, Mail } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold">OpenAid Africa</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Transparent donations, milestone funding, and public receipts for
            communities that deserve accountability in real time.
          </p>
          <div className="mt-6 flex gap-3 text-white/70">
            <Globe2 size={20} aria-hidden="true" />
            <Github size={20} aria-hidden="true" />
            <Mail size={20} aria-hidden="true" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-gold">Platform</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/campaigns">Discover campaigns</Link>
            <Link href="/create">Create campaign</Link>
            <Link href="/transparency">Global ledger</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-gold">Trust</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <span>Sepolia first</span>
            <span>IPFS receipt proofs</span>
            <span>Milestone-based releases</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
