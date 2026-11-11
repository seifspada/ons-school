import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading w-full max-w-[650px] ${align === "center" ? "mx-auto text-center" : ""} ${className ?? ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="m-0 text-[clamp(26px,3vw,36px)] font-[790] leading-[1.2] tracking-[-0.045em] text-[var(--navy)] max-[560px]:text-[27px]" id={titleId}>{title}</h2>
      {subtitle ? <p className="mb-0 mt-[11px] text-[15px] text-[var(--muted)]">{subtitle}</p> : null}
      {children}
    </div>
  );
}
