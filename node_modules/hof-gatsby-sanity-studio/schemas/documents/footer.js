export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Footer',
      hidden: true,
    },
    {
      name: 'sponsorLink',
      type: 'url',
      title: 'Sponsor Link',
    },
    {
      name: 'sponsorContact',
      type: 'contactInfo',
      title: 'Sponsor Contact',
    },
  ],
}
