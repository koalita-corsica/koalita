export default {
  name: "suppCom",
  type: "object",
  title: "Support Com",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      type: "localeBody",
      title: "Description",
    },
  ],
};
