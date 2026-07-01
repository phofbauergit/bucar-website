"use client";

import { useId, useState } from "react";
import type { Therapy } from "@/content/home";
import { Seal } from "@/components/shared/Seal";
import { practice } from "@/content/home";

type BefundCardProps = {
  therapy: Therapy;
  index: number;
};

export function BefundCard({ therapy, index }: BefundCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="group border border-v3-border bg-v3-surface transition-colors duration-200 hover:border-v3-signal/40">
      <div className="flex items-center justify-between border-b border-v3-border bg-v3-muted/50 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="font-mono-v3 text-[0.6rem] uppercase tracking-[0.2em] text-v3-subtle">
            Befund · {String(index + 1).padStart(2, "0")}
          </span>
          <span className="hidden h-px w-8 bg-v3-border sm:block" aria-hidden="true" />
          <span className="hidden text-[0.6rem] uppercase tracking-[0.15em] text-v3-signal sm:block">
            {therapy.tagline}
          </span>
        </div>
        <Seal icon={therapy.icon} className="h-8 w-8 text-v3-graphite/70" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-v3-graphite">{therapy.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-v3-subtle sm:hidden">{therapy.tagline}</p>

        <p className="mt-3 text-sm leading-relaxed text-v3-subtle">{therapy.teaser.slice(0, 120)}…</p>

        <div className={`befund-details mt-4 ${open ? "is-open" : ""}`} id={panelId}>
          <div>
            <p className="pb-4 text-sm leading-relaxed text-v3-graphite/80">{therapy.teaser}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="cursor-pointer text-[0.65rem] font-medium uppercase tracking-[0.2em] text-v3-signal transition-colors hover:text-v3-graphite"
          >
            {open ? "Befund schließen ↑" : "Befund öffnen ↓"}
          </button>
          <a
            href={`tel:${practice.phoneHref}`}
            className="cursor-pointer text-[0.65rem] font-medium uppercase tracking-[0.2em] text-v3-subtle transition-colors hover:text-v3-signal"
          >
            Termin →
          </a>
        </div>
      </div>
    </article>
  );
}
