import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {RobotIcon, RocketIcon} from '@sanity/icons'

export default defineConfig([
  {
  projectId: 'b1gnc6rj',
  name: 'production-workspace',
  title: 'Production',
  basePath: '/production',
  dataset: 'production',
  icon: RocketIcon,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
},
{
  projectId: 'b1gnc6rj',
  name: 'development-workspace',
  title: 'Development',
  basePath: '/development',
  dataset: 'development',
  icon: RobotIcon,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
}
}
])

