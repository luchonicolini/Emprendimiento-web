"use client";

import type { MouseEvent, ReactNode } from "react";
import type { ProjectType } from "@/content/prototipo";
import { announcePlanSelection } from "@/lib/plan-selection";

export function PricingPlanLink({
  plan,
  children,
  className = "",
  ariaLabel,
}: {
  plan: ProjectType;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const selectPlan = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    announcePlanSelection(plan);
  };

  return (
    <a
      href="#ficha"
      className={className}
      aria-label={ariaLabel ?? `Elegir ${plan}`}
      data-plan={plan}
      onClick={selectPlan}
    >
      {children}
    </a>
  );
}
