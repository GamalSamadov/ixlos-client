import { Metadata } from 'next'
import { Poppins, Josefin_Sans as JosefinSans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { BackgroundEllipsis } from '@/shared/ui/backgrounds/background-ellipsis/BackgroundEllipsis'

import '@/shared/styles/globals.scss'
import Providers from './providers'

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
    <html lang={locale}>
      <body
        className={`${poppins.variable} ${josefinSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <BackgroundEllipsis />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main>{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
