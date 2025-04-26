import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'world',
  type: 'document',
  title: 'World',
  fields: [
    defineField({
      name: 'name',
      type: 'localizedString',
      title: 'World Name',
    }),
    defineField({
      name: 'description',
      type: 'localizedText',
      title: 'World Description',
    }),
    defineField({
      name: 'movies',
      type: 'array',
      title: 'Movies/Series in World',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
    }),
  ],
})
