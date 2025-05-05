import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'movie',
  type: 'document',
  title: 'Movie or Series',
  fields: [
    defineField({
      name: 'title',
      type: 'localizedString',
      title: 'Title',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Movie', value: 'movie'},
          {title: 'Series', value: 'series'},
        ],
      },
    }),
    defineField({
      name: 'releaseDate',
      type: 'datetime',
      title: 'Release Date',
    }),
    defineField({
      name: 'timelineDate',
      type: 'string',
      title: 'Timeline Date (MCU Time)',
    }),
    defineField({
      name: 'synopsis',
      type: 'localizedText',
      title: 'Synopsis',
    }),
    defineField({
      name: 'poster',
      type: 'image',
      title: 'Poster Image',
    }),
    defineField({
      name: 'whereToWatch',
      type: 'array',
      title: 'Where to Watch',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'saga',
      type: 'reference',
      title: 'Saga',
      to: [{type: 'saga'}],
    }),
    defineField({
      name: 'phase',
      type: 'reference',
      title: 'Phase',
      to: [{type: 'phase'}],
    }),
    defineField({
      name: 'characters',
      type: 'array',
      title: 'Main Characters',
      of: [{type: 'reference', to: [{type: 'character'}]}],
    }),
  ],

  preview: {
    select: {
      title: 'title.en',
      type: 'type',
      releaseDate: 'releaseDate',
      poster: 'poster',
    },
    prepare({title, type, releaseDate, poster}) {
      const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : ''
      return {
        title: title || 'Untitled Movie/Series',
        subtitle: `${type || 'Unknown'}${releaseYear ? ` - ${releaseYear}` : ''}`,
        media: poster,
      }
    },
  },
})
