export default {
    name: 'investorMentor',
    title: 'Investor / Mentor',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'type',
        title: 'Investor or Mentor',
        type: 'string',
        options: {
          list: ['Investor', 'Mentor'],
          layout: 'radio'
        }
      },
      {
        name: 'linkedin',
        title: 'LinkedIn',
        type: 'url'
      },
      {
        name: 'profilePhoto',
        title: 'Profile Photo',
        type: 'image'
      }
    ]
  }
  