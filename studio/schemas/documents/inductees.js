export default {
    name: 'inductee',
    title: 'Inductees',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'company',
        title: 'Company / Title',
        type: 'string'
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text'
      },
      {
        name: 'profilePhoto',
        title: 'Profile Photo',
        type: 'image'
      },
      {
        name: 'profileVideo',
        title: 'Profile Video',
        type: 'file'
      },
      {
        name: 'inductionCeremony',
        title: 'Induction Ceremony',
        type: 'file'
      }
    ]
  }
  