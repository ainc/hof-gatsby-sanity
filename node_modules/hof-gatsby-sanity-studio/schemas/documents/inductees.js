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
      description:
        "You must click the 'generate' button after entering the name in order to create the url for the inductee.",
      options: {
        source: 'inductee.name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'profileVideo',
      title: 'Profile Video Link',
      type: 'url',
    },
    {
      name: 'profileVideoImage',
      title: 'profile Video Image',
      type: 'image',
    },
    {
      name: 'inductionCeremonyVideo',
      title: 'Induction Ceremony Video Link',
      type: 'url',
    },
    {
      name: 'InductionVideoImage',
      title: 'Induction Video Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'inductee.name',
    },
  },
}
