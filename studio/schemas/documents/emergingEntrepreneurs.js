export default {
  name: 'emergingEntrepreneur',
  title: 'Emerging Entrepreneurs',
  type: 'document',
  fields: [
    {
      name: 'inductee',
      type: 'inducteeTemplate',
      title: 'Inductee',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'inductee.name',
    }
  }
}
