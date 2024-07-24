import {defineType} from 'sanity';

const podcastType = defineType({
    name: 'podcast',
    title: 'Podcast Episodes',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'host',
            title: 'Host',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Published At',
            type: 'datetime',
            validation: rule => rule.required(),
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'HH:mm'
            }
        },
        {
            name: 'image',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'href',
            title: 'Link',
            type: 'string',
            validation: rule => rule.required()
        }
    ],
    preview: {
        select: {
          media: 'image',
          title: 'title',
        },
    },
})

export default podcastType;