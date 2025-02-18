class UserPages {
  PROFILE(id: string) {
    return `/profile/${id}`
  }

  PROFILE_ADD_BIO(id: string) {
    return `/profile/${id}/add-bio`
  }

  PROFILE_EDIT_BIO(id: string) {
    return `/profile/${id}/edit-bio`
  }
}

export const USER_PAGES = new UserPages()
