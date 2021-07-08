export default {
  name: "siteweb",
  type: "object",
  title: "Site web",
  fields: [
    {
      name: "title",
      type: "string",
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
