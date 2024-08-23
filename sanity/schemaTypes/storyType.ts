import {defineField, defineType} from 'sanity'

const storyType = defineType({
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
      validation: rule => rule.required(),
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'main',
      title: 'Main Story',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: rule => rule.required(),
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm'
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
        {
          type: 'image'
        },
        {
          type: 'code'
        }
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
    },
    {
      name: 'map',
      type: 'geopoint',
      title: 'Map'
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'attribute',
              type: 'string',
              title: 'Attribution'
            }
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
  },
})

export default storyType
