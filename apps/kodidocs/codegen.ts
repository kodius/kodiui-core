import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:4000/api/graphql',
  // schema: 'http://116.203.201.51:4001/api/graphql',
  documents: 'src/**/*.graphql',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/gql/': {
      preset: 'client',
    },
  },
}

export default config
