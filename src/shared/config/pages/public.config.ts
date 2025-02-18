class PublicPages {
  LANDING_PAGE = '/'
  LOGIN = '/login'
  REGISTER = '/register'
  SETTINGS = '/settings'

  HOME = '/tafseer'
  BOOKS = '/books'

  PROFILE(id: string) {
    return `/profile/${id}`
  }
}

export const PUBLIC_PAGES = new PublicPages()
