import { practice } from "@/content/home";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-v2-mist bg-v2-bone/95 px-4 py-3 backdrop-blur-md sm:hidden">
      <a
        href={`tel:${practice.phoneHref}`}
        className="flex cursor-pointer items-center justify-center gap-2 bg-v2-ink py-3 text-sm font-medium text-v2-bone"
      >
        Jetzt anrufen — {practice.phone}
      </a>
    </div>
  );
}
