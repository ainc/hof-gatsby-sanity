export default {
  name: 'investorMentor',
  title: 'Investor / Mentor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Investor, Mentor, or Executive',
      type: 'string',
      options: {
        list: ['Investor', 'Mentor', 'Executive'],
        layout: 'radio',
      },
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    },
  ],
}
