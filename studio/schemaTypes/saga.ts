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
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'movie',
              type: 'reference',
              to: [{type: 'movie'}],
              title: 'Movie',
            }),
            defineField({
              name: 'order',
              type: 'number',
              title: 'Order in Saga',
            }),
          ],
          preview: {
            select: {
              title: 'movie.title.en',
              order: 'order',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Untitled Movie',
                subtitle: selection.order ? `Order: ${selection.order}` : '',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'phases',
      type: 'array',
      title: 'Phases in Saga',
      of: [{type: 'reference', to: [{type: 'phase'}]}],
    }),
  ],
  preview: {
    select: {
      name: 'name.en',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name || 'Untitled Saga',
      }
    },
  },
})
