export default {
  name: "formations",
  type: "object",
  title: "Formations",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "desc",
      type: "localeBody",
      title: "Description:",
    },
    {
      name: "partenaires",
      type: "reference",
      title: "Partenaires:",
      to: [{ type: "partenaire" }],
    },
  ],
};
