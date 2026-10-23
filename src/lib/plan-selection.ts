import type { ProjectType } from "@/content/prototipo";

export const PLAN_SELECT_EVENT = "nicolini:select-plan";

export function announcePlanSelection(plan: ProjectType) {
  window.dispatchEvent(
    new CustomEvent<ProjectType>(PLAN_SELECT_EVENT, { detail: plan }),
  );
}
