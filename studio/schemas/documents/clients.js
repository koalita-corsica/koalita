import { BsPersonSquare } from 'react-icons/bs';

export default {
  name: 'client',
  type: 'document',
  title: 'Clients',
  icon: BsPersonSquare,
  fields: [
    {
      name: 'name',
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
