import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-v1-border bg-v1-bg px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="h-7 w-7 text-v1-forest" />
          <div className="text-sm text-v1-ink/70">
            <p className="font-medium text-v1-forest">{practice.doctorName}</p>
            <p>{practice.region}</p>
          </div>
        </div>

        <nav aria-label="Rechtliches" className="flex items-center gap-5 text-sm text-v1-ink/60">
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Impressum
          </span>
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Datenschutz
          </span>
          <Link href="/" className="text-v1-forest underline-offset-4 hover:underline">
            ← Konzeptübersicht
          </Link>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-v1-ink/40">
        © {new Date().getFullYear()} {practice.doctorName} — Konzeptentwurf, kein Live-Betrieb.
      </p>
    </footer>
  );
}
