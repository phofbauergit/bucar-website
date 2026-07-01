import { practice } from "@/content/home";

/** Fixed bottom call bar on small screens — 2026 healthcare UX pattern:
 * primary booking action always one thumb-tap away. Pure CSS, no JS. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-v1-border bg-v1-surface/95 px-4 py-3 backdrop-blur-md sm:hidden">
      <a
        href={`tel:${practice.phoneHref}`}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-v1-forest py-3 text-sm font-medium text-v1-bg"
      >
        Jetzt anrufen — {practice.phone}
      </a>
    </div>
  );
}
