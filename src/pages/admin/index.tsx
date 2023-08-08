import AdminTemplate from '@/templates/Admin'
import Contents from '@/templates/Admin/Contents'
import WithAuth from '@/utils/withAuth'
import Loader from '@/components/Loader'
import Notify from '@/components/Notify'
import PageTransition from '@/components/PageTransition'

import { SpaProps } from '@/types/spa'
import { InputValue, FormEvent } from '@/types/form'
import type { GetStaticProps } from 'next'
import { useState } from 'react'
import { NextSeo } from 'next-seo'

import { getDocumentById } from '@/firebase/crud'
import { updateOrCreatePage } from '@/firebase/helpers'

const Admin = (props: SpaProps) => {
  const [loading, setLoading] = useState({ message: '', visible: false })
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })

  const handleEvents = (type: string, message: string, error: boolean) => {
    if (type === 'uploading') {
      setLoading({ message, visible: true })
    } else {
      setLoading({ message, visible: false })
      setNotify({ message, visible: true, error })
    }
  }

  const onSubmit = async (e: FormEvent, formValues: InputValue) => {
    console.log(formValues)
    const upload = updateOrCreatePage(formValues)

    upload.on('uploading', (message: string) =>
      handleEvents('uploading', message, false)
    )
    upload.on('uploaderror', (message: string) =>
      handleEvents('uploaderror', message, true)
    )

    upload.on('uploadsuccess', (message: string) => {
      handleEvents('uploadsuccess', message, false)
    })
  }

  return (
    <WithAuth>
      <PageTransition
        variants={{
          initial: { x: '-100%' },
          animate: { x: 0 },
          exit: { x: '-100%' }
        }}
      >
        <AdminTemplate
          link="/"
          linkLabel="Back to landing page"
          title="Administration"
        >
          <NextSeo title="Administration - DevByLucas" />
          <Contents
            home={props.home}
            navbar={props.navbar}
            about={props.about}
            projects={props.projects}
            footer={props.footer}
            onSubmit={onSubmit}
          />
          <Loader message={loading.message} visible={loading.visible} />
          <Notify
            type={notify.error ? 'error' : 'success'}
            message={notify.message}
            visible={notify.visible}
            onClose={() =>
              setNotify({ message: '', visible: false, error: false })
            }
          />
        </AdminTemplate>
      </PageTransition>
    </WithAuth>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page: SpaProps = await getDocumentById('spa', 'page')

  if (!page) {
    return {
      notFound: true
    }
  }

  return {
    revalidate: 5,
    props: page
  }
}

export default Admin
