export default {
  name: 'nominationFormButton',
  title: 'Nomination Form Button',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      description: 'The text that will be displayed on the button.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'deadline',
      title: 'Deadline Date',
      type: 'date',
      description: 'Select the deadline date for the button using the date picker.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'The URL to which the button will link.',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    },
  ],
}
