import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

import { GRAPHQL_URL } from '../constants/url.constants'

const httpLink = createUploadLink({
  uri: GRAPHQL_URL,
  credentials: 'include',
  headers: {
    'apollo-require-preflight': 'true',
  },
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

// Server-side client creator
export const createServerClient = (cookies?: string) => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      ...(cookies ? { Cookie: cookies } : {}),
    },
  }))

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: true,
  })
}
