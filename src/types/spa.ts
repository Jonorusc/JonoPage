export type Project = {
  title: string
  description: string
  source?: string
  img: string[]
  readme?: string
  slogan: string
}

export type HomeProps = {
  brand: string
  btnText: string
}

export type NavBar = {
  brand: string
  img: string
}

export type AboutProps = {
  title: string
  paragraph: string
}

export type FooterProps = {
  title: string
  socialMedia: {
    youtube: string
    instagram: string
    facebook?: string
    github?: string
    linkedin?: string
    twitter?: string
  }
  pageSource: string
}

export type SpaProps = {
  id?: string
  home: HomeProps
  navbar: NavBar
  about: AboutProps
  projects: Project[]
  footer: FooterProps
}
