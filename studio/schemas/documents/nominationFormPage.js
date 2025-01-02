export default {
  name: 'nominationFormPage',
  title: 'Nomination Form Page',
  type: 'document',
  fields: [
    {
      name: 'note',
      title: 'Note',
      type: 'text',
      description: 'This is a customizable note or message to display above the form buttons.',
    },
    {
      name: 'buttons',
      title: 'Nomination Form Buttons',
      type: 'array',
      of: [{type: 'nominationFormButton'}],
      description:
        'An array of nomination form buttons, each with text, deadline, and URL (Uniform Resource Locator).',
    },
  ],
  preview: {
    select: {
      note: 'note',
      buttonCount: 'buttons.length',
    },
    prepare(selection) {
      const {note, buttonCount} = selection
      const shortNote = note && note.length > 40 ? note.slice(0, 40) + '…' : note
      return {
        title: `Nomination Form Page`,
        subtitle: `${buttonCount || 0} button${buttonCount === 1 ? '' : 's'} | Note: ${shortNote || 'No note'}`,
      }
    },
  },
}
