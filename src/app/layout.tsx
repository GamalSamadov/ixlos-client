import ApolloClientProvider from '@/providers/ApolloClientProvider'
import '@/styles/globals.css'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body>
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
