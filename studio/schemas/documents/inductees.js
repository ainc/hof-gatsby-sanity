export default {
    name: 'inductee',
    title: 'Inductees',
    type: 'document',
    fields: [
      {
        name: 'inductee',
        type: 'inducteeTemplate',
        title: 'Inductee',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: "You must click the 'generate' button after entering the name in order to create the url for the inductee.",
        options: {
          source: 'inductee.name',
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
        name: 'profileVideo',
        title: 'Profile Video Link',
        type: 'url'
      },
      {
        name: 'inductionCeremonyVideo',
        title: 'Induction Ceremony Video Link',
        type: 'url'
      }
    ],
    preview: {
      select: {
        title: 'inductee.name',
      }
    }
  }
  