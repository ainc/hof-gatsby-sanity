export default {
  type: 'object',
  name: 'inducteeTemplate',
  title: 'Inductee Template',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      // options: {
      //   dateFormat: 'YYYY',
      // },
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          'Technology', 'Healthcare', 'Energy', 'Food'
        ]
      },
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          'Technology', 'Healthcare', 'Energy', 'Food'
        ]
      },
    },
    {
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image',
    },
  ],
}
