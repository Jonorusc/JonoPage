import { ReactElement } from 'react'
import getUsernameFromURL from './getUsernameFromURL'

const verifyTagLink = (
  icons: { [key: string]: ReactElement },
  tag: string
): [ReactElement | null, string | null, string | null] => {
  // icons list

  // if tag is a link then extract the link and check if the link string includes any of the icons keys
  if (tag.includes('http')) {
    const [linkIcon, username] = getUsernameFromURL(tag)

    if (linkIcon) {
      return [icons[linkIcon], username, tag]
    }
  }

  // If it's not a link or no valid icon found, return default values
  return [null, tag, null]
}

export default verifyTagLink
