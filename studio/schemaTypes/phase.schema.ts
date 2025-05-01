import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'phase',
  type: 'document',
  title: 'Phase',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Phase Name',
    }),
    defineField({
      name: 'description',
      type: 'localizedText',
      title: 'Phase Description',
    }),
    defineField({
      name: 'saga',
      type: 'reference',
      to: [{type: 'saga'}],
      title: 'Saga',
    }),
    defineField({
      name: 'movies',
      type: 'array',
      title: 'Movies in Phase',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      sagaTitle: 'saga.name.en',
    },
    prepare({title, sagaTitle}) {
      return {
        title: title || 'Unnamed Phase',
        subtitle: sagaTitle ? `Saga: ${sagaTitle}` : '',
      }
    },
  },
})
