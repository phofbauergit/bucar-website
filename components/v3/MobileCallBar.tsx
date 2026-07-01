import { practice } from "@/content/home";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-v3-border bg-v3-graphite p-3 sm:hidden">
      <a
        href={`tel:${practice.phoneHref}`}
        className="phone-beat flex cursor-pointer items-center justify-center gap-2.5 py-2.5 text-sm font-medium text-v3-paper"
        aria-label={`Jetzt anrufen — ${practice.phone}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="phone-beat-icon h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 12h16" strokeLinecap="round" opacity="0.35" />
          <path d="M4 12 L8 8 L8 16 L12 12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12 L16 6 L16 18 L20 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Jetzt anrufen — {practice.phone}
      </a>
    </div>
  );
}
