import { GraphQLClient } from 'graphql-request'

// const securityHeaders = {
//   'Cache-Control': 'no-cache, no-store, must-revalidate',
//   'Content-Security-Policy': "default-src 'self'",
//   'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
//   'X-Content-Type-Options': 'nosniff',
//   'X-Frame-Options': 'DENY',
//   'Referrer-Policy': 'strict-origin-when-cross-origin',
//   'Permissions-Policy': 'interest-cohort=()',
// }

export const graphQlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL as string)
