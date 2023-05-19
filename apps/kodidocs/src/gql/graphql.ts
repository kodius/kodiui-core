/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Account = Node & {
  __typename?: 'Account'
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  /** The ID of an object */
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type Category = {
  __typename?: 'Category'
  elements?: Maybe<Array<Maybe<Element>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type CreateHistoryReleaseInput = {
  description: Scalars['String']
  elementId: Scalars['ID']
  name: Scalars['String']
  version: Scalars['String']
}

export type CreateSessionInput = {
  email?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  username?: InputMaybe<Scalars['String']>
}

export type Element = {
  __typename?: 'Element'
  categoryId?: Maybe<Category>
  description?: Maybe<Scalars['String']>
  historyReleases?: Maybe<Array<Maybe<HistoryRelease>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type HistoryRelease = {
  __typename?: 'HistoryRelease'
  description?: Maybe<Scalars['String']>
  elementId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']
}

export type RootMutationType = {
  __typename?: 'RootMutationType'
  createCategory?: Maybe<Category>
  createElement?: Maybe<Element>
  createHistoryRelease?: Maybe<HistoryRelease>
  createSession?: Maybe<Session>
}

export type RootMutationTypeCreateCategoryArgs = {
  name: Scalars['String']
}

export type RootMutationTypeCreateElementArgs = {
  categoryId: Scalars['ID']
  description: Scalars['String']
  name: Scalars['String']
}

export type RootMutationTypeCreateHistoryReleaseArgs = {
  input?: InputMaybe<CreateHistoryReleaseInput>
}

export type RootMutationTypeCreateSessionArgs = {
  input?: InputMaybe<CreateSessionInput>
}

export type RootQueryType = {
  __typename?: 'RootQueryType'
  getCategories?: Maybe<Array<Maybe<Category>>>
  getElementById?: Maybe<Element>
  /** Health check */
  healthCheck?: Maybe<Scalars['Boolean']>
  me?: Maybe<Account>
  node?: Maybe<Node>
}

export type RootQueryTypeGetElementByIdArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type RootQueryTypeNodeArgs = {
  id: Scalars['ID']
}

export type Session = {
  __typename?: 'Session'
  account?: Maybe<Account>
  token?: Maybe<Scalars['String']>
}

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type GetCategoriesQuery = {
  __typename?: 'RootQueryType'
  getCategories?: Array<{
    __typename?: 'Category'
    id: string
    name?: string | null
    elements?: Array<{ __typename?: 'Element'; name?: string | null; id: string } | null> | null
  } | null> | null
}

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String']
}>

export type CreateCategoryMutation = {
  __typename?: 'RootMutationType'
  createCategory?: { __typename?: 'Category'; id: string } | null
}

export const GetCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCategories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCategories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'elements' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>
export const CreateCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>
