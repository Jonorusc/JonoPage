import AdminTemplate from '@/templates/Admin'

const Page404 = () => {
  return (
    <AdminTemplate link="/" linkLabel="Back to landing page" title="404">
      <h1>Sorry but i didn't create this page :(</h1>
    </AdminTemplate>
  )
}

export default Page404
