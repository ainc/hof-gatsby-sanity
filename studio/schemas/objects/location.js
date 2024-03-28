export default {
    type: 'object',
    name: 'location',
    title: 'Location',
    fields: [
        {
            name: 'venue',
            type: 'string',
            title: 'Venue'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'zip',
            type: 'string',
            title: 'Zip Code'
        },
        {
            name: 'contact',
            type: 'contactInfo',
            title: 'Contact Info',
            description: 'For venue'
        }
    ]
}