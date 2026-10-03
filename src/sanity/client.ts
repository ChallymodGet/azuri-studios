import { createClient } from "next-sanity";
import { isSanityConfigured, sanityApiVersion, sanityDataset, sanityProjectId } from "./env";

export function getSanityClient() {
  if (!isSanityConfigured()) {
    return null;
  }

  return createClient({
    projectId: sanityProjectId!,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: true,
  });
}
