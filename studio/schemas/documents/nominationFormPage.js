export default {
  name: 'nominationFormPage',
  title: 'Nomination Form Page',
  type: 'document',
  fields: [
    {
      name: 'note',
      title: 'Note',
      type: 'text',
      description: 'A customizable note or message to display above the buttons.',
    },
    {
      name: 'deadline',
      title: 'Nomination Deadline',
      type: 'string',
      description: 'The deadline for nominations in a human-readable format (e.g., May 3, 2024).',
    },
    {
      name: 'buttons',
      title: 'Nomination Form Buttons',
      type: 'array',
      of: [{type: 'nominationFormButton'}],
      description: 'An array of nomination form buttons, each with text, deadline, and URL.',
    },
  ],
}
