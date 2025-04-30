import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'character',
  type: 'document',
  title: 'Character',
  fields: [
    defineField({
      name: 'name',
      type: 'localizedString',
      title: 'Hero Name',
    }),
    defineField({
      name: 'realName',
      type: 'localizedString',
      title: 'Real Name',
    }),
    defineField({
      name: 'description',
      type: 'localizedText',
      title: 'Description',
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
    }),
    defineField({
      name: 'movies',
      type: 'array',
      title: 'Movies/Series',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'realName.en',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Character',
        subtitle: subtitle ? `Real Name: ${subtitle}` : '',
      }
    },
  },
})
