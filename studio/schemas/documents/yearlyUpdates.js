export default {
    name: 'yearlyUpdates',
    type: 'document',
    title: 'Yearly Updates',
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          initialValue: 'Data Updated Yearly',
          hidden: true
        },
        {
          name: 'location',
          type: 'location',
          title: 'Location of Event'
        },
        {
          name: 'registrationLink',
          type: 'url',
          title: 'Registration Link'
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
    ],
}