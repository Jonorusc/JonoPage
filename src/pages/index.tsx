import Template from '@/templates/Spa/index'
import { SpaProps } from '@/types/spa'

const Home = (props: SpaProps) => {
  return <Template {...props} />
}

// export const getStaticProps = async () => {}

export default Home
