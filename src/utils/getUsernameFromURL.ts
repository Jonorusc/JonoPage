const getUsernameFromURL = (url: string): [string | null, string | null] => {
  const patterns = {
    facebook: /(?:www\.)?facebook\.com\/([^/]+)(\/|$)/i,
    linkedin: /(?:www\.)?linkedin\.com\/in\/([^/]+)(\/|$)/i,
    github: /(?:www\.)?github\.com\/([^/]+)(\/|$)/i,
    youtube: /(?:www\.)?youtube\.com\/(?:@)?([^/]+)(\/|$)/i,
    instagram: /(?:www\.)?instagram\.com\/([^/]+)(\/|$)/i
  }

  let username = null
  let media = null

  Object.entries(patterns).some(([platform, pattern]) => {
    const match = url.match(pattern)
    if (match && match[1]) {
      username = match[1]
      media = platform
      return true
    }
  })

  return [media, username]
}

export default getUsernameFromURL
