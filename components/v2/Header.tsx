import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";

const NAV = [
  { href: "#therapien", label: "Therapien" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#vita", label: "Vita" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-v2-mist/40 bg-v2-bone/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <BrandMark className="h-8 w-8 text-v2-ink" />
          <span className="font-display text-lg font-medium tracking-tight text-v2-ink">
            Bucar
            <span className="ml-2 hidden text-xs font-normal uppercase tracking-[0.3em] text-v2-terracotta sm:inline">
              TCM · Oberbayern
            </span>
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-v2-ink/75 transition-colors hover:text-v2-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${practice.phoneHref}`}
          className="inline-flex cursor-pointer items-center gap-2 rounded-none bg-v2-terracotta px-5 py-2.5 text-sm font-medium text-v2-bone transition-colors duration-200 hover:bg-v2-ink"
        >
          {practice.phone}
        </a>
      </div>
    </header>
  );
}
