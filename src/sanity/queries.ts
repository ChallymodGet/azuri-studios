export const siteContentQuery = `{
  "services": *[_type == "service"] | order(sortOrder asc) {
    "id": _id,
    badge,
    title,
    description,
    features,
    outcome,
    gradient,
    "image": coalesce(imageUrl, image.asset->url)
  },
  "projects": *[_type == "project"] | order(sortOrder asc) {
    "id": _id,
    title,
    category,
    year,
    featured,
    "image": coalesce(imageUrl, image.asset->url),
    "caseStudy": select(
      caseStudyType == "link" && defined(caseStudyUrl) => {
        "kind": "link",
        "href": caseStudyUrl
      },
      caseStudyType == "pdf" && defined(caseStudyPdf.asset->url) => {
        "kind": "pdf",
        "href": caseStudyPdf.asset->url
      }
    )
  },
  "testimonials": *[_type == "testimonial"] | order(sortOrder asc) {
    "id": _id,
    quote,
    name,
    role,
    "image": coalesce(imageUrl, image.asset->url)
  },
  "stats": *[_type == "stat"] | order(sortOrder asc) {
    "id": _id,
    target,
    suffix,
    label
  },
  "faqs": *[_type == "faq"] | order(sortOrder asc) {
    "id": _id,
    question,
    answer
  }
}`;
