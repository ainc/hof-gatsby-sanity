import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig([{
  api: {
    projectId: 'b1gnc6rj',
    dataset: 'production',
    id: 'production'
  }
},
{
  api: {
    projectId: 'b1gnc6rj',
    dataset: 'development',
    id: 'development'
  }
}
])
