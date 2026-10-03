import { fallbackSiteContent } from "./fallback";
import type { SiteContent } from "./types";
import { getSanityClient } from "@/sanity/client";
import { siteContentQuery } from "@/sanity/queries";

function hasAnyContent(content: SiteContent): boolean {
  return (
    content.services.length > 0 ||
    content.projects.length > 0 ||
    content.testimonials.length > 0 ||
    content.stats.length > 0 ||
    content.faqs.length > 0
  );
}

function mergeWithFallback(partial: Partial<SiteContent>): SiteContent {
  return {
    services: partial.services?.length ? partial.services : fallbackSiteContent.services,
    projects: partial.projects?.length ? partial.projects : fallbackSiteContent.projects,
    testimonials: partial.testimonials?.length
      ? partial.testimonials
      : fallbackSiteContent.testimonials,
    stats: partial.stats?.length ? partial.stats : fallbackSiteContent.stats,
    faqs: partial.faqs?.length ? partial.faqs : fallbackSiteContent.faqs,
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  const client = getSanityClient();
  if (!client) {
    return fallbackSiteContent;
  }

  try {
    const data = await client.fetch<SiteContent>(siteContentQuery, {}, { next: { revalidate: 60 } });
    if (!hasAnyContent(data)) {
      return fallbackSiteContent;
    }
    return mergeWithFallback(data);
  } catch {
    return fallbackSiteContent;
  }
}
