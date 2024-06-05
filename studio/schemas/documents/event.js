export default {
    name: 'event',
    type: 'document',
    title: 'Event Info',
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          initialValue: 'Event Info',
          hidden: true
        },
        {
          name: 'location',
          type: 'location',
          title: 'Location of Event'
        },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date of Event'
        },
        {
          name: 'registrationLink',
          type: 'url',
          title: 'Registration Link'
        },
    ],
}