export default {
  name: "travails",
  type: "document",
  fields: [
    {
      name: "type",
      type: "localeString",
      title: "Type:",
    },
    {
      name: "client",
      type: "reference",
      title: "Client",
      to: [{ type: "client" }],
    },
    {
      name: "desc",
      type: "localeBody",
      title: "Description:",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
