import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 0 }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "App Design",
          "WebApp Design",
          "Landing Page",
          "Website",
          "Branding",
          "Others",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "year", title: "Year", type: "number", validation: (r) => r.required() }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: false }),
    defineField({
      name: "imageUrl",
      title: "Image path or URL",
      type: "string",
      description: "Site path like /assets/project-quid.png, or upload below",
    }),
    defineField({
      name: "image",
      title: "Image upload",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "caseStudyType",
      title: "Case study",
      type: "string",
      initialValue: "none",
      options: {
        layout: "radio",
        list: [
          { title: "None", value: "none" },
          { title: "External link (Behance, etc.)", value: "link" },
          { title: "PDF upload", value: "pdf" },
        ],
      },
    }),
    defineField({
      name: "caseStudyUrl",
      title: "Case study URL",
      type: "url",
      description: "Behance project, portfolio page, or any public link.",
      hidden: ({ parent }) => parent?.caseStudyType !== "link",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { caseStudyType?: string };
          if (parent?.caseStudyType === "link" && !value) {
            return "Add a URL or switch case study to None / PDF.";
          }
          return true;
        }),
    }),
    defineField({
      name: "caseStudyPdf",
      title: "Case study PDF",
      type: "file",
      options: { accept: "application/pdf" },
      hidden: ({ parent }) => parent?.caseStudyType !== "pdf",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { caseStudyType?: string };
          if (parent?.caseStudyType === "pdf" && !value) {
            return "Upload a PDF or switch case study to None / link.";
          }
          return true;
        }),
    }),
  ],
  orderings: [{ title: "Sort order", name: "sortOrderAsc", by: [{ field: "sortOrder", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
