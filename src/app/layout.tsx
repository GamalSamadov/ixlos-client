import { Metadata } from 'next'
import { Poppins, Josefin_Sans as JosefinSans } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { BackgroundEllipsis } from '@/shared/ui'
import { TopLoader } from '@/widgets/shared/ui/top-loader'

import { Providers } from './providers'

import '@/shared/styles/globals.scss'

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

const naskh = localFont({
  src: './fonts/naskh.otf',
  variable: '--naskh',
  weight: '500',
})

const naskhBold = localFont({
  src: './fonts/naskh-bold.otf',
  variable: '--naskh-bold',
  weight: '500',
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
        className={`${poppins.variable} ${josefinSans.variable} ${naskh.variable} ${naskhBold.variable} 
        
        antialiased`}
        suppressHydrationWarning
      >
        <TopLoader />
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
