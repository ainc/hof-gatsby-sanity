export default {
  type: 'object',
  name: 'hotel',
  title: 'Hotel Info',
  fields: [
    {
      name: 'location',
      type: 'location',
      title: 'Location of Hotel',
    },
    {
      name: 'roomRate',
      type: 'number',
      title: 'Hotel Room Rate',
    },
    {
      name: 'roomCutoffDate',
      type: 'date',
      title: 'Hotel Room Cutoff Date',
    },
  ],
}
