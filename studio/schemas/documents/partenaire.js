import { FaHandshake } from 'react-icons/fa';

export default {
  name: 'partenaire',
  type: 'document',
  title: 'Partenaire',
  icon: FaHandshake,
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
  ],
};
