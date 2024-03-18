export default {
    type: 'object',
    name: 'inducteeTemplate',
    title: 'Inductee Template',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'company',
          title: 'Company',
          type: 'string'
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'year',
          title: 'Year',
          type: 'date',
          options: {
            dateFormat: 'YYYY'
          }
        },
        {
          name: 'profilePhoto',
          title: 'Profile Photo',
          type: 'image'
        },
      ],
    }
        