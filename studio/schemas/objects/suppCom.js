export default {
  name: 'suppCom',
  type: 'object',
  title: 'Support Com',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title: ',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'desc',
      type: 'bodyPortableText',
      title: 'Description: ',
    },
  ],
};
