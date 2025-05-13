class PublicPages {
  LANDING_PAGE = '/'
  LOGIN = '/login'
  REGISTER = '/register'
  SETTINGS = '/settings'

  PROFILE = '/profile'
  BOOKS = '/books'

  HOME = '/tafseer'

  QURAN_PAGE_DETAILS(pageNumber: number) {
    return `/tafseer/page/${pageNumber}`
  }

  AYAH_DETAILS(ayahId: string) {
    return `/tafseer/ayah/${ayahId}`
  }
}

export const PUBLIC_PAGES = new PublicPages()
