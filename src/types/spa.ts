export type Project = {
  title: string
  description: string
  source: string
  img: string[]
  readme: string
  slogan: string
}

export type SpaProps = {
  navBar: {
    img: string
    brand: string
    dark?: boolean
  }
  home: {
    title: string
    btnText: string
  }
  about: {
    title: string
    paragraph: string
  }
  projects: Project[]
  footer: {
    title: string
    socialMedia: {
      youtube: string
      instagram: string
      github?: string
      linkedin?: string
      twitter?: string
      facebook?: string
    }
    pageSource: string
  }
}
