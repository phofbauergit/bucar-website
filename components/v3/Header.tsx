import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";
import { PulsePhoneCTA } from "@/components/v3/PulsePhoneCTA";

const NAV = [
  { href: "#befunde", label: "Befunde" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#vita", label: "Vita" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-v3-border bg-v3-paper/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <BrandMark className="h-8 w-8 text-v3-signal" />
          <span className="font-display text-sm font-semibold tracking-tight text-v3-graphite">
            Dr. Bucar
            <span className="ml-2 hidden font-mono-v3 text-[0.55rem] font-normal uppercase tracking-[0.25em] text-v3-subtle sm:inline">
              Pulse Editorial
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-v3-subtle transition-colors hover:text-v3-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <PulsePhoneCTA className="hidden text-xs sm:inline-flex">
          {practice.phone}
        </PulsePhoneCTA>
        <PulsePhoneCTA className="px-4 py-2.5 text-xs sm:hidden" variant="secondary">
          Anrufen
        </PulsePhoneCTA>
      </div>

      <div className="hidden border-t border-v3-border/60 px-6 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-v3-subtle sm:block lg:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>{practice.region}</span>
          <span>{practice.email}</span>
        </div>
      </div>
    </header>
  );
}
