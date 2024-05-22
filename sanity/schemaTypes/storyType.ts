import {defineField, defineType} from 'sanity'

async function slug_gen(tag: string, title: string) {
  return(
    tag + "/" + title
  )
}

const storyType = {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'main',
      title: 'Main Story',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'LT'
      }
    },
    {
      name: 'publishedBy',
      title: "Published By",
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'string',
      options: {
        list: [
          {title: 'News', value: 'news'},
          {title: 'Podcasts', value: 'podcasts'},
          {title: 'Videos', value: 'videos'},
          {title: 'Events', value: 'events'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'poster',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
  },
}

export default storyType
