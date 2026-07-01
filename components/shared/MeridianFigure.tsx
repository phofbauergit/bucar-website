/**
 * Abstract meridian / energy-flow mark — the shared visual signature across
 * both homepage concepts, tying back to the practice's own tagline
 * "Im Fluss der Lebensenergie" without resorting to stock photography or a
 * literal (uncanny) body illustration.
 *
 * variant="calm"  (v1): soft static lines, nodes pulse when the "qi" easter
 *                       egg is triggered (see QiListener + .qi-active).
 * variant="ink"   (v2): bolder lines, meant to be wrapped in <DrawOnScroll>
 *                       so paths draw themselves in on scroll.
 */
export function MeridianFigure({
  variant,
  className = "",
  titleId,
}: {
  variant: "calm" | "ink";
  className?: string;
  titleId: string;
}) {
  const isInk = variant === "ink";

  return (
    <svg
      viewBox="0 0 420 520"
      className={className}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>
        Abstrakte Illustration fließender Meridianlinien und Energiepunkte
      </title>

      <path
        d="M210 22c88 0 146 68 146 164 0 58-19 106-53 145-14 68-68 116-93 147-25-31-79-79-93-147-34-39-53-87-53-145C64 90 122 22 210 22Z"
        fill="var(--accent)"
        opacity={isInk ? 0.08 : 0.12}
        stroke="none"
      />

      <g
        fill="none"
        stroke="var(--accent-strong)"
        strokeWidth={isInk ? 2.25 : 1.4}
        strokeLinecap="round"
        opacity={isInk ? 0.9 : 0.55}
      >
        <path
          className={isInk ? "meridian-path" : undefined}
          pathLength={isInk ? 1 : undefined}
          d="M140 46C64 142 182 216 102 314 44 388 138 452 150 494"
        />
        <path
          className={isInk ? "meridian-path" : undefined}
          pathLength={isInk ? 1 : undefined}
          d="M280 46C356 142 238 216 318 314 376 388 282 452 270 494"
        />
        <path
          className={isInk ? "meridian-path" : undefined}
          pathLength={isInk ? 1 : undefined}
          d="M210 34C210 150 152 246 210 344 248 412 210 460 210 494"
        />
      </g>

      <g fill="var(--highlight)" stroke="none">
        {[
          [210, 34],
          [140, 46],
          [280, 46],
          [102, 314],
          [318, 314],
          [210, 344],
          [210, 494],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={isInk ? 4.5 : 5}
            className={isInk ? "meridian-node" : "qi-node"}
            style={{ transitionDelay: `${i * 60}ms` }}
            opacity={isInk ? 0.85 : 0.5}
          />
        ))}
      </g>
    </svg>
  );
}
