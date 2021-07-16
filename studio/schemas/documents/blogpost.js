import { RiArticleFill } from 'react-icons/ri';

export default {
  name: 'blogpost',
  type: 'document',
  title: 'Blog Post',
  icon: RiArticleFill,
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
      description:
        'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
    },
    {
      name: 'desc',
      type: 'bodyPortableText',
      title: 'Description: ',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference',
        },
      ],
    },
  ],
};
