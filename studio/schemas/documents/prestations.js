export default {
  name: "prestations",
  type: "document",
  title: "Prestations",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Create Prestation",
      of: [
        { type: "logo" },
        { type: "suppCom" },
        { type: "siteweb" },
        { type: "formations" },
      ],
    },
  ],
};
