import AdminTemplate from '@/templates/Admin'
import NewProject from '@/templates/Admin/AddProject'
import WithAuth from '@/utils/withAuth'
import Loader from '@/components/Loader'
import Notify from '@/components/Notify'

import { InputValue, FormEvent } from '@/types/form'

import { uploadProject } from '@/firebase/helpers'
import eventEmitter from '@/components/Events'
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
    uploadProject(formValues)

    const handleEvents = (type: string, message: string, error: boolean) => {
      if (type === 'up-uploading') {
        setLoading({ message, visible: true })
      } else {
        setLoading({ message, visible: false })
        setNotify({ message, visible: true, error })
      }
    }

    // listen to the event
    eventEmitter.on('up-uploading', (message) =>
      handleEvents('up-uploading', message as string, false)
    )
    eventEmitter.on('up-uploaderror', (message) =>
      handleEvents('up-uploaderror', message as string, true)
    )

    eventEmitter.on('up-uploadsuccess', (message) => {
      handleEvents('up-uploadsuccess', message as string, false)
      router.push('/admin')
    })
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
