import { GraphQLClient } from 'graphql-request'

export const graphQlClient = new GraphQLClient(
  'http://116.203.201.51:4001/api/graphql'
  // 'http://0.0.0.0:4000/api/graphql'
)
