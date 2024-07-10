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
      {
        name: 'schedule',
        type: 'string',
        title: 'Event Schedule',
        description: 'Must be formatted in the following style: 4:30 p.m. - Reception,6:00 p.m. - Dinner'
      },
      {
        name: 'dinnerPrice',
        type: 'dinnerPrice',
        title: 'Dinner Pricing'
      },
      {
        name: 'hotelInfo',
        type: 'hotel',
        title: 'Hotel Info',
      },
  ],
}