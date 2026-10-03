import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 0 }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / company", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "imageUrl",
      title: "Photo path or URL",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo upload",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [{ title: "Sort order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
