import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const allowedOrigin = process.env.SANITY_ALLOWED_ORIGIN || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'Marvel Storyverse',
  projectId: 'dq10xpy2',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  api: {
    cors: {
      origins: [allowedOrigin],
      credentials: true,
    },
  },
})
