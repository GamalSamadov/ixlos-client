'use client'

import { ApolloProvider } from '@apollo/client'
import { PropsWithChildren } from 'react'

import { apolloClient } from '@/libs/apollo-client'

const ApolloClientProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default ApolloClientProvider
