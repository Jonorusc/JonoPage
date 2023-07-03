import AdminTemplate from '@/templates/Admin'
import NewProject from '@/templates/Admin/AddProject'
import WithAuth from '@/utils/withAuth'
import Loader from '@/components/Loader'
import Notify from '@/components/Notify'

import { InputValue, FormEvent } from '@/types/form'

import { uploadProject } from '@/firebase/helpers'
import { useRouter } from 'next/router'

import { useState } from 'react'

const AddProject = () => {
  const [loading, setLoading] = useState({ message: '', visible: false })
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })
  const router = useRouter()

  const onSubmit = async (e: FormEvent, formValues: InputValue) => {
    const upload = uploadProject(formValues)

    // listen to the event
    upload.on('uploading', (message: string) =>
      handleEvents('uploading', message, false)
    )
    upload.on('uploaderror', (message: string) =>
      handleEvents('uploaderror', message, true)
    )

    upload.on('uploadsuccess', (message: string) => {
      handleEvents('uploadsuccess', message, false)
      setTimeout(() => {
        router.push('/admin')
      }, 2000)
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
        link="/admin"
        linkLabel="Back to admin"
        title="Adding a Project"
      >
        <NewProject onSubmit={onSubmit} />
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

export default AddProject
