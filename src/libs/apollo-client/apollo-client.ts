import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'include',
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
