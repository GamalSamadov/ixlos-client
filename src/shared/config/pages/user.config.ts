class UserPages {
  PROFILE_BY_ID(id: string) {
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

  PROFILE_EDIT_AVATAR(id: string) {
    return `/profile/${id}/edit-avatar`
  }

  ADD_USER_BIO(id: string) {
    return `profile/${id}/bio`
  }

  ADD_USER_AVATAR(id: string) {
    return `profile/${id}/avatar`
  }
}

export const USER_PAGES = new UserPages()
