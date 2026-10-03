import createImageUrlBuilder from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "./env";

const builder =
  sanityProjectId && sanityDataset
    ? createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset })
    : null;

export function urlForImage(source: Parameters<NonNullable<typeof builder>["image"]>[0]) {
  return builder?.image(source).auto("format").url();
}
