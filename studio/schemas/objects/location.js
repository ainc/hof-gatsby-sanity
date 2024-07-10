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
            name: 'link',
            type: 'url',
            title: 'Relevant Link',
            description: 'ex. link for Directions/Parking or link to book hotel'
        },
        {
            name: 'contact',
            type: 'contactInfo',
            title: 'Contact Info',
            description: 'For venue'
        }
        
    ]
}