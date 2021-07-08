export default {
  name: "suppCom",
  type: "object",
  title: "Support Com",
  fields: [
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [{ type: "supcomImage" }],
    },
  ],
};
