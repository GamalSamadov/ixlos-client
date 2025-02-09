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
  title: 'Ixlos nashriyoti | Islomiy bilimlar manbayi',
  description:
    "Qur'on va Sunnatdan ishonchli bilim berish uchun tuzulgan bepul Islomiy ta'lim va ma'lumotnoma ilovasi",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/logo/32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/logo/16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/logo/apple-touch-icon.png',
    },
  ],
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
