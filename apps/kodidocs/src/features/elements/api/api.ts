import { GetElementsDocument } from '@gql/graphql'
import { graphQlClient } from '@lib'

export const getElementById = async (elementId: string) => {
  const { getElements } = await graphQlClient.request(GetElementsDocument)
  return getElements?.find((el) => el?.id === elementId)
}
