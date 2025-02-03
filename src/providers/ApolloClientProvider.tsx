'use client'

import { ApolloProvider } from '@apollo/client'
import { PropsWithChildren } from 'react'

import { client } from '@/libs/apollo-client'

const ApolloClientProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
