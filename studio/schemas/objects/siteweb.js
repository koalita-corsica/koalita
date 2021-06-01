export default {
  name: "siteweb",
  type: "object",
  title: "Site web",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "title",
    },
    {
      name: "etapes",
      type: "array",
      title: "Etapes",
      of: [{ type: "etape" }],
    },
  ],
};
