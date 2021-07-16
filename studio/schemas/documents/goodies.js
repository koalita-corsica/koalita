import { RiCupFill } from 'react-icons/ri';

export default {
  name: 'goodies',
  type: 'document',
  title: 'Goodies',
  icon: RiCupFill,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title: ',
    },
    {
      name: 'shortDesc',
      type: 'bodyPortableText',
      title: 'Short Description: ',
    },
    {
      name: 'desc',
      type: 'bodyPortableText',
      title: 'Description: ',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images: ',
      of: [{ type: 'image' }],
    },
    {
      name: 'prix',
      type: 'number',
      title: 'Prix: ',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags: ',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
  ],
};
