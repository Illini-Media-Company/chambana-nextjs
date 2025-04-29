import { defineType } from 'sanity';

const podcastShowType = defineType({
    name: 'podcastShow',
    title: 'Podcast Shows',
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
            type: 'string',
            validation: rule => rule.required()
        },
        {
            name: 'imgUrl',
            title: 'Image',
            type: 'string',
            options: {
                hotspot: true
            },
            validation: rule => rule.required(),
            initialValue: '/placeholder.webp'
        },
        {
            name: 'href',
            title: 'Website URL',
            type: 'url',
            validation: rule => rule.required().uri({
                scheme: ['http', 'https']
            }),
            initialValue: 'https://dailyillini.com'
        }
    ],
    preview: {
        select: {
          media: 'image',
          title: 'title',
        },
    },
})

export default podcastShowType;