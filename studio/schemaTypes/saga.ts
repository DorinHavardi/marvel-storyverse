import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'saga',
  type: 'document',
  title: 'Saga',
  fields: [
    defineField({
      name: 'name',
      type: 'localizedString',
      title: 'Saga Name',
    }),
    defineField({
      name: 'description',
      type: 'localizedText',
      title: 'Saga Description',
    }),
    defineField({
      name: 'movies',
      type: 'array',
      title: 'Movies in Saga',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
    }),
  ],
})
