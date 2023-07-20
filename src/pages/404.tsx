import AdminTemplate from '@/templates/Admin'
import { NextSeo } from 'next-seo'

const Page404 = () => {
  return (
    <AdminTemplate link="/" linkLabel="Back to landing page" title="404">
      <NextSeo title="🤔 What happend?" />
      <h1>Sorry but i didn't create this page :(</h1>
    </AdminTemplate>
  )
}

export default Page404
