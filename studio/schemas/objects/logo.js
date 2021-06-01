export default {
  name: "logo",
  type: "object",
  title: "Logo",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "images",
      type: "array",
      title: "images",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      type: "localeBody",
      title: "Description",
    },
  ],
};
