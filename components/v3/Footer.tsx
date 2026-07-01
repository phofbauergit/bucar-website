import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-v3-border bg-v3-muted/30 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="h-7 w-7 text-v3-signal" />
          <div className="text-sm text-v3-subtle">
            <p className="font-medium text-v3-graphite">{practice.doctorName}</p>
            <p>{practice.region}</p>
          </div>
        </div>

        <nav aria-label="Rechtliches" className="flex items-center gap-5 text-sm text-v3-subtle">
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Impressum
          </span>
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Datenschutz
          </span>
          <Link href="/" className="text-v3-graphite underline-offset-4 hover:underline">
            ← Konzeptübersicht
          </Link>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl font-mono-v3 text-[0.6rem] uppercase tracking-[0.15em] text-v3-subtle/60">
        © {new Date().getFullYear()} {practice.doctorName} — Konzeptentwurf, kein Live-Betrieb.
      </p>
    </footer>
  );
}
