class PublicPages {
  LANDING_PAGE = '/'
  LOGIN = '/login'
  REGISTER = '/register'
  SETTINGS = '/settings'

  PROFILE = '/profile'
  BOOKS = '/books'

  HOME = '/tafseer'

  SURAH_DETAILS(surahId: string) {
    return `/tafseer/surah/${surahId}`
  }

  AYAH_DETAILS(ayahId: string) {
    return `/tafseer/ayah/${ayahId}`
  }
}

export const PUBLIC_PAGES = new PublicPages()
