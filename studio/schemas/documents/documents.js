
export default {
    name: 'documents',
    type: 'document',
    title: 'Documents',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: 'PDF Documents',
            hidden: true
        },
        {
            name: 'sponsorOpportunites',
            type: 'file',
            title: 'Sponsor Opportunites Document'
        },
        {
            name: 'advertisingRate',
            type: 'file',
            title: 'Advertising Rate Document'
        },
        {
            name: 'postEventReport',
            type: 'file',
            title: 'Post Event Report'
        }
    ]
}