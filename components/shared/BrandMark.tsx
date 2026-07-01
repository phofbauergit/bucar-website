/** Modernized reinterpretation of the practice's "life energy wave" mark —
 * a single flowing line crossing a circle, in place of the dated gold
 * brushstroke logo on the old site. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <path
        d="M8 24c3-8 8-8 12-2s9 6 12-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="24" r="1.6" fill="currentColor" />
      <circle cx="32" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}
