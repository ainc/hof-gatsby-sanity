import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'b1gnc6rj',
  },
  graphql: [
    {
      workspace: 'production-workspace',
      dataset: 'production',
      id: 'production',

    },
    {
      workspace: 'development-workspace',
      dataset: 'development',
      id: 'development'
    }
  ]
})
