const pageAdType = {
    name: "page-ad",
    title: "Page Ad",
    type: "document",
    fields: [
        {
            name: 'adtitle',
            title: 'Ad Title',
            type: 'string',
        },
        {
            name: 'href',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'ad',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
        }
    ]
}

export default pageAdType;