import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/shared/libs/i18n/request.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ixlos-nashriyoti.s3.eu-north-1.amazonaws.com'],
  },
}

export default withNextIntl(nextConfig)
