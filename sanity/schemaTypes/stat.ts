import { defineField, defineType } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Stat",
  type: "document",
  fields: [
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 0 }),
    defineField({ name: "target", title: "Number", type: "number", validation: (r) => r.required() }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: "e.g. +, %, hrs, yrs",
    }),
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
  ],
  orderings: [{ title: "Sort order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "label", target: "target", suffix: "suffix" },
    prepare({ title, target, suffix }) {
      return { title, subtitle: `${target ?? ""}${suffix ?? ""}` };
    },
  },
});
