import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export const TopLoader = () => {
  return (
    <NextTopLoader
      color="#2299DD"
      crawlSpeed={10}
      height={3}
      crawl={false}
      showSpinner={false}
      easing="ease"
      speed={10}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  )
}
