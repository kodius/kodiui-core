import { GraphQLClient } from 'graphql-request'

export const graphQlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL as string
  // 'http://0.0.0.0:4000/api/graphql'
)
