import { AiOutlineFileDone } from 'react-icons/ai';

export default {
  name: 'travails',
  type: 'document',
  title: 'Realisations',
  icon: AiOutlineFileDone,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title:',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        isHighlighted: true,
      },
    },
    {
      name: 'client',
      type: 'reference',
      title: 'Client',
      to: [{ type: 'client' }],
    },
    {
      name: 'desc',
      type: 'bodyPortableText',
      title: 'Description:',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
      options: {
        list: [
          { title: 'Carree', value: 'carree' },
          { title: 'Vertical', value: 'vertical' },
          { title: 'Rectangle', value: 'rectangle' },
        ],
      },
    },
  ],
};
