// import * as S from './styles'
import { SpaProps } from '@/types/spa'
import NavBar from '@/components/NavBar'

import Home from './home'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

type Props = {
  page: SpaProps
}

const SinglePageApplication = ({ page }: Props) => {
  return (
    <main>
      <NavBar {...page.navbar} dark />
      <Home {...page.home} />
      <About {...page.about} />
      <Projects projects={page.projects} />
      <Contact />
      <Footer {...page.footer} />
    </main>
  )
}

export default SinglePageApplication
