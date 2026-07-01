import type { Therapy } from "@/content/home";

type SealIcon = Therapy["icon"];

const ROTATIONS: Record<SealIcon, number> = {
  needle: -4,
  laser: 3,
  herb: -2,
  injection: 5,
  plasma: -5,
  immune: 2,
  homeopathy: -3,
  child: 4,
};

function Glyph({ icon }: { icon: SealIcon }) {
  switch (icon) {
    case "needle":
      return (
        <>
          <line x1="12" y1="6.5" x2="12" y2="18" />
          <circle cx="12" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </>
      );
    case "laser":
      return (
        <>
          <line x1="7.5" y1="16.5" x2="15" y2="9" />
          <circle cx="16.2" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
          <line x1="17.5" y1="10" x2="19.3" y2="10.6" />
          <line x1="14.5" y1="5" x2="15.1" y2="6.8" />
        </>
      );
    case "herb":
      return (
        <>
          <path d="M12 18.5c-3-1.2-5-4-5-7.3a5 5 0 0 1 10 0c0 3.3-2 6.1-5 7.3Z" />
          <path d="M12 8v10.2" />
        </>
      );
    case "injection":
      return (
        <>
          <rect x="10.6" y="4.8" width="2.8" height="6.6" rx="0.6" />
          <line x1="12" y1="11.4" x2="12" y2="18.2" />
          <line x1="9" y1="18.4" x2="15" y2="18.4" />
        </>
      );
    case "plasma":
      return <path d="M12 5c3 4.2 5 6.7 5 9a5 5 0 0 1-10 0c0-2.3 2-4.8 5-9Z" />;
    case "immune":
      return <path d="M12 4.2 17.6 6.5v4.7c0 4.1-2.6 6.9-5.6 8.6-3-1.7-5.6-4.5-5.6-8.6V6.5L12 4.2Z" />;
    case "homeopathy":
      return (
        <>
          <circle cx="10" cy="12" r="3.6" />
          <circle cx="14" cy="12" r="3.6" />
        </>
      );
    case "child":
      return (
        <>
          <path d="M12 18.8v-6.2" />
          <path d="M12 12.6c0-2.8-1.9-3.9-4.6-3.9-.1 2.9 1.9 4.6 4.6 3.9Z" />
          <path d="M12 12.6c0-3.6 1.9-4.9 4.6-4.9.1 3.3-1.9 5.1-4.6 4.9Z" />
        </>
      );
    default:
      return null;
  }
}

export function Seal({
  icon,
  className = "",
  ringClassName = "",
}: {
  icon: SealIcon;
  className?: string;
  ringClassName?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${className}`}
      style={{ transform: `rotate(${ROTATIONS[icon]}deg)` }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-full w-full">
        <circle
          cx="12"
          cy="12"
          r="10.5"
          strokeWidth="1.1"
          className={ringClassName || "opacity-40"}
        />
        <g strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <Glyph icon={icon} />
        </g>
      </svg>
    </span>
  );
}
