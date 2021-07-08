export default {
  name: "supcomImage",
  type: "object",
  title: "Image",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "desc",
      type: "bodyPortableText",
      title: "Description:",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
