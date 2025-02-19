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

  PROFILE_EDIT_INFO(id: string) {
    return `/profile/${id}/edit-info`
  }

  PROFILE_UPDATE_PASSWORD(id: string) {
    return `/profile/${id}/update-password`
  }
}

export const USER_PAGES = new UserPages()
