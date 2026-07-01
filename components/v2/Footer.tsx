import Link from "next/link";
import { practice } from "@/content/home";
import { BrandMark } from "@/components/shared/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-v2-mist/50 bg-v2-ink px-6 py-10 text-v2-bone lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="h-7 w-7 text-v2-terracotta" />
          <div className="text-sm text-v2-bone/70">
            <p className="font-medium text-v2-bone">{practice.doctorName}</p>
            <p>{practice.region}</p>
          </div>
        </div>

        <nav aria-label="Rechtliches" className="flex items-center gap-5 text-sm text-v2-bone/55">
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Impressum
          </span>
          <span className="cursor-default" title="Wird beim Launch ergänzt">
            Datenschutz
          </span>
          <Link href="/" className="text-v2-bone underline-offset-4 hover:underline">
            ← Konzeptübersicht
          </Link>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-v2-bone/35">
        © {new Date().getFullYear()} {practice.doctorName} — Konzeptentwurf, kein Live-Betrieb.
      </p>
    </footer>
  );
}
