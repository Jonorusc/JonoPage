import AdminTemplate from '@/templates/Admin'
import Contents from '@/templates/Admin/Contents'
import WithAuth from '@/utils/withAuth'
import Loader from '@/components/Loader'
import Notify from '@/components/Notify'

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

  const onSubmit = async (e: FormEvent, formValues: InputValue) => {
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

    const handleEvents = (type: string, message: string, error: boolean) => {
      if (type === 'uploading') {
        setLoading({ message, visible: true })
      } else {
        setLoading({ message, visible: false })
        setNotify({ message, visible: true, error })
      }
    }
  }

  return (
    <WithAuth>
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
    </WithAuth>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let projects = {}

  await getDocumentById('spa', 'page')
    .then((page) => {
      projects = page
    })
    .catch((error) => {
      throw new Error(error)
    })

  return {
    props: {
      ...projects
    }
  }
}

export default Admin
