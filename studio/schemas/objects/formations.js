export default {
  name: "formations",
  type: "object",
  title: "Formations",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "etapes",
      type: "array",
      title: "Sections",
      of: [{ type: "formation" }],
    },
    {
      name: "partenaires",
      type: "array",
      title: "Partenaires:",
      of: [{ type: "reference", to: [{ type: "partenaire" }] }],
    },
  ],
};
