export default {
  name: "logo",
  type: "object",
  title: "Logo",
  fields: [
    {
      name: "title",
      type: "string",
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
      type: "bodyPortableText",
      title: "Description",
    },
  ],
};
