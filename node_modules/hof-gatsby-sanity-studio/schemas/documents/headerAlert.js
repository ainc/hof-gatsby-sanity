export default {
  name: 'headerAlert',
  title: 'Header Alert',
  type: 'document',
  fields: [
    {
      name: 'alertText',
      title: 'Alert Text',
      type: 'string',
      description: 'The main text to appear in the alert banner.',
      validation: (Rule) => Rule.required().min(5).warning('Alert text is required'),
    },
    {
      name: 'linkText',
      title: 'Link Text (Optional)',
      type: 'string',
      description: 'The text that should appear for the link (optional).',
    },
    {
      name: 'linkUrl',
      title: 'Link URL (Optional)',
      type: 'url',
      description: 'Where the link directs the user (optional).',
    },
  ],
}
