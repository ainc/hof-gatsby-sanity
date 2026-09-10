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
      name: 'parentCompany',
      title: 'Parent Company',
      type: 'string',
      description: 'Optional field for the parent company of the inductee. If the inductee has no parent company, leave this entry blank.',
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
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          'Technology', 'Healthcare', 'Energy', 'Food', 'Finance', 'Other'
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
