import { Metadata } from 'next'
import { Poppins, Josefin_Sans as JosefinSans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { BackgroundEllipsis } from '@/components/ui/backgrounds/BackgroundEllipsis/BackgroundEllipsis'
import ApolloClientProvider from '@/providers/ApolloClientProvider'
import { ToastProvider } from '@/providers/ToastProvider'

import '@/styles/globals.scss'

const poppins = Poppins({
  variable: '--poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const josefinSans = JosefinSans({
  variable: '--josefin-sans',
  subsets: ['latin'],
  weight: ['300', '400'],
})

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
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${josefinSans.variable} antialiased`}
      >
        <BackgroundEllipsis />
        <ToastProvider />
        <NextIntlClientProvider messages={messages}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
