import { SpaProps } from '@/types/spa'
import { GetServerSideProps } from 'next'
import { getDocumentById } from '@/firebase/crud'

import SinglePageApplication from '@/templates/Spa/index'

const Home = (props: SpaProps) => <SinglePageApplication page={props} />

export const getServerSideProps: GetServerSideProps = async () => {
  const page: SpaProps = await getDocumentById('spa', 'page')

  if (!page) {
    return {
      notFound: true
    }
  }

  return {
    props: page
  }
}

export default Home
