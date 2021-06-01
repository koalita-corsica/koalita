export default {
  name: "prestations",
  type: "document",
  title: "Prestations",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
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
