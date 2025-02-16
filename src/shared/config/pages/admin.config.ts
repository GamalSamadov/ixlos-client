class AdminPages {
  HOME = '/admin'
  USER_HOME = '/tafseer'
  USERS = '/admin/users'
  AUTHORS = '/admin/authors'
  ADD_AUTHORS = '/admin/authors/add'

  AUTHOR_BIO(id: string) {
    return `/admin/authors/${id}/bio`
  }

  AUTHOR_EDIT(id: string) {
    return `/admin/authors/${id}/edit`
  }
}

export const ADMIN_PAGES = new AdminPages()
