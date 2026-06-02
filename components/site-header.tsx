"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/campaigns", label: "Campaigns" },
  { href: "/create", label: "Create" },
  { href: "/transparency", label: "Transparency" },
  { href: "/dashboard", label: "Dashboard" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-sand/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-gold">
            <ShieldCheck size={22} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-none text-forest">
              OpenAid Africa
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-forest/60">
              On-chain impact
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-forest/75 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ConnectButton />
        </div>

        <button
          type="button"
          className="focus-ring rounded-md border border-forest/15 p-2 text-forest lg:hidden"
          aria-label="Open navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      <div
        className={cn(
          "border-t border-forest/10 px-4 pb-4 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 py-3 text-sm font-semibold text-forest">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md py-2">
              {item.label}
            </Link>
          ))}
        </nav>
        <ConnectButton />
      </div>
    </header>
  );
}
