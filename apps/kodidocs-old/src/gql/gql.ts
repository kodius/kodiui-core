/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createSession($input: CreateSessionInput) {\n  createSession(input: $input) {\n    token\n  }\n}\n\nquery me {\n  me {\n    id\n    email\n  }\n}": types.CreateSessionDocument,
    "query getElementById($id: ID) {\n  getElementById(id: $id) {\n    name\n    id\n  }\n}\n\nquery getElements {\n  getElements {\n    name\n    id\n    description\n    historyReleases {\n      description\n      name\n      version\n      id\n    }\n  }\n}": types.GetElementByIdDocument,
    "query getCategories {\n  getCategories {\n    elements {\n      name\n      id\n    }\n    id\n    name\n  }\n}\n\nmutation createCategory($name: String!) {\n  createCategory(name: $name) {\n    id\n  }\n}\n\nmutation createElement($categoryId: ID!, $description: String!, $name: String!) {\n  createElement(categoryId: $categoryId, description: $description, name: $name) {\n    id\n  }\n}": types.GetCategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createSession($input: CreateSessionInput) {\n  createSession(input: $input) {\n    token\n  }\n}\n\nquery me {\n  me {\n    id\n    email\n  }\n}"): (typeof documents)["mutation createSession($input: CreateSessionInput) {\n  createSession(input: $input) {\n    token\n  }\n}\n\nquery me {\n  me {\n    id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getElementById($id: ID) {\n  getElementById(id: $id) {\n    name\n    id\n  }\n}\n\nquery getElements {\n  getElements {\n    name\n    id\n    description\n    historyReleases {\n      description\n      name\n      version\n      id\n    }\n  }\n}"): (typeof documents)["query getElementById($id: ID) {\n  getElementById(id: $id) {\n    name\n    id\n  }\n}\n\nquery getElements {\n  getElements {\n    name\n    id\n    description\n    historyReleases {\n      description\n      name\n      version\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCategories {\n  getCategories {\n    elements {\n      name\n      id\n    }\n    id\n    name\n  }\n}\n\nmutation createCategory($name: String!) {\n  createCategory(name: $name) {\n    id\n  }\n}\n\nmutation createElement($categoryId: ID!, $description: String!, $name: String!) {\n  createElement(categoryId: $categoryId, description: $description, name: $name) {\n    id\n  }\n}"): (typeof documents)["query getCategories {\n  getCategories {\n    elements {\n      name\n      id\n    }\n    id\n    name\n  }\n}\n\nmutation createCategory($name: String!) {\n  createCategory(name: $name) {\n    id\n  }\n}\n\nmutation createElement($categoryId: ID!, $description: String!, $name: String!) {\n  createElement(categoryId: $categoryId, description: $description, name: $name) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;