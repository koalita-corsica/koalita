import { GiKoala } from 'react-icons/gi';

export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  icon: GiKoala,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom: ',
    },
    {
      name: 'desc',
      type: 'bodyPortableText',
      title: 'Description: ',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};
