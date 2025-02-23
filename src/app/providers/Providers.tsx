'use client'

import { ApolloProvider } from '@apollo/client'
import { LazyMotion, domAnimation } from 'framer-motion'
import { PropsWithChildren } from 'react'

import { apolloClient } from '@/shared/libs/apollo-client/apollo-client'

import { ToastProvider } from './ToastProvider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ToastProvider />
      <ApolloProvider client={apolloClient}>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </ApolloProvider>
    </>
  )
}
