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
        type: 'string'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: "You must click the 'generate' button after entering the name in order to create the url for the inductee.",
        options: {
          source: 'name',
          maxLength: 96
        },
        validation: (Rule) => Rule.required(),
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
        title: 'Profile Video Link',
        type: 'url'
      },
      {
        name: 'inductionCeremonyVideo',
        title: 'Induction Ceremony Video Link',
        type: 'url'
      }
    ]
  }
  