import ApolloClientProvider from '@/providers/ApolloClientProvider'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Ixlos sahifasi',
  description: 'Ixlos sahifasi',
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <ApolloClientProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ApolloClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
