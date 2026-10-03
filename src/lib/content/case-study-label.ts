import type { ProjectCaseStudy } from "./types";

export function caseStudyButtonLabel(caseStudy: ProjectCaseStudy): string {
  if (caseStudy.kind === "pdf") {
    return "View case study (PDF)";
  }
  if (/behance\.net/i.test(caseStudy.href)) {
    return "View on Behance ↗";
  }
  return "View case study ↗";
}
