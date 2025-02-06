export default {
  name: 'foundersSeries',
  title: 'Founders Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videoEmbedLink',
      title: 'Video Embed Link',
      type: 'url',
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'image',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    },
  ],
}
