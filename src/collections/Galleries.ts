import { CollectionConfig } from 'payload/types'

const Galleries: CollectionConfig = {
  slug: 'galleries',
  admin: {
    useAsTitle: 'name',
    group: 'Contenu Fine Art',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom de la Galerie (ex: Naples)',
    },
    {
      name: 'ambiance',
      type: 'select',
      options: [
        { label: 'Solaire & Vibrant', value: 'naples_summer' },
        { label: 'Brumeux & Silencieux', value: 'neuchatel_mist' },
      ],
      label: 'Rendu Cinéma',
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Sélection d’œuvres',
    },
  ],
}

export default Galleries
