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
      name: 'longDescription',
      type: 'localizedText',
      title: 'Extended World Description',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'World Image',
    }),
    defineField({
      name: 'movies',
      type: 'array',
      title: 'Movies/Series in World',
      of: [{type: 'reference', to: [{type: 'movie'}]}],
    }),
    defineField({
      name: 'residents',
      type: 'array',
      title: 'Residents (Characters in World)',
      of: [{type: 'reference', to: [{type: 'character'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || 'Untitled World',
        media,
      }
    },
  },
})
