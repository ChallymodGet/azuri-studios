import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 0 }),
    defineField({ name: "badge", title: "Badge", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "outcome", title: "Outcome", type: "text", rows: 2 }),
    defineField({
      name: "gradient",
      title: "Figure gradient (CSS)",
      type: "string",
      description: "e.g. linear-gradient(292deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
    }),
    defineField({
      name: "imageUrl",
      title: "Image path or URL",
      type: "string",
      description: "Site path like /assets/service-carbon.png, or upload below",
    }),
    defineField({
      name: "image",
      title: "Image upload",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [{ title: "Sort order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "badge" },
  },
});
