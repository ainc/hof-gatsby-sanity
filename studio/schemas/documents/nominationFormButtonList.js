export default {
  name: 'nominationFormButtonList',
  title: 'Nomination Buttons',
  type: 'document',
  fields: [
    {
      name: 'button',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'nominationFormButton'}],
    },
  ],
  preview: {
    select: {
      buttons: 'button',
    },
    prepare(selection) {
      const {buttons} = selection
      const buttonCount = buttons ? buttons.length : 0
      return {
        title: `Nomination Buttons (${buttonCount})`,
        subtitle: `${buttonCount} button${buttonCount === 1 ? '' : 's'}`,
      }
    },
  },
}
