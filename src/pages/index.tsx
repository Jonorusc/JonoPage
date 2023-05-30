import SPA from '@/templates/Spa/index'
import { SpaProps } from '@/types/spa'

const Home = (props: SpaProps) => {
  return <SPA {...props} />
}

// export const getStaticProps = async () => {}

export default Home
