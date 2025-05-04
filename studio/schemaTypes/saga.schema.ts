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
