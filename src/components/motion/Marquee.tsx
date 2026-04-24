import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="inline-flex animate-marquee">
        <div className="inline-flex shrink-0">{children}</div>
        <div className="inline-flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}