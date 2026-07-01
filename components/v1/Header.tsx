import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

const NAV = [
  { href: "#schwerpunkte", label: "Therapien" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#vita", label: "Über mich" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-v1-border/70 bg-v1-bg/90 backdrop-blur-md">
      <div className="hidden items-center justify-between border-b border-v1-border/60 px-6 py-1.5 text-xs text-v1-ink/70 sm:flex lg:px-10">
        <p className="tracking-wide">Ganzheitliche Allgemeinarztpraxis in Oberbayern</p>
        <div className="flex items-center gap-5">
          <PhoneCTA className="transition-colors hover:text-v1-forest" />
          <a href={`mailto:${practice.email}`} className="transition-colors hover:text-v1-forest">
            {practice.email}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-3.5 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <BrandMark className="h-9 w-9 text-v1-forest" />
          <span className="font-display leading-tight text-v1-forest">
            <span className="block text-base font-semibold">Dr. Bucar</span>
            <span className="block text-[0.65rem] font-normal uppercase tracking-[0.18em] text-v1-ink/60">
              Ganzheitliche Heilmethoden
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-v1-ink/80 transition-colors hover:text-v1-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${practice.phoneHref}`}
          className="hidden cursor-pointer items-center gap-2 rounded-full bg-v1-forest px-5 py-2.5 text-sm font-medium text-v1-bg transition-colors duration-200 hover:bg-v1-ink sm:inline-flex"
        >
          Termin erfragen
        </a>
      </div>
    </header>
  );
}
