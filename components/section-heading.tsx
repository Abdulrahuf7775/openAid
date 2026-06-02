import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-terracotta">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-lg leading-8 text-charcoal/70">{children}</p> : null}
    </div>
  );
}
