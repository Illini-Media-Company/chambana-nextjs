const bannerType = {
    name: "banner-ad",
    title: "Banner Ad",
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
            title: 'Ad',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
        }
    ]
}

export default bannerType