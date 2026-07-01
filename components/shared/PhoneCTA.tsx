import { practice } from "@/content/home";

export function PhoneCTA({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${practice.phoneHref}`}
      className={className}
      aria-label={`${practice.phone} anrufen`}
    >
      {label ?? `${practice.phone}`}
    </a>
  );
}
