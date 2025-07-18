export default {
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sponsorType',
      title: 'Sponsor Type',
      type: 'string',
      options: {
        list: ['Presenting', 'Platinum', 'Gold', 'Silver'],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
}
