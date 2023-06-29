/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminTemplate from '@/templates/Admin'
import NewProject from '@/templates/Admin/AddProject'
import WithAuth from '@/utils/withAuth'
import Loader from '@/components/Loader'
import Notify from '@/components/Notify'

import { InputValue, FormEvent } from '@/types/form'

import { useState } from 'react'

import * as firebase from '@/firebase/crud'

const AddProject = () => {
  const [loading, setLoading] = useState({ message: '', visible: false })
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })

  const uploadProject = async (page: any, project: any) => {
    await firebase
      .createOrUpdateDocument({
        ...page,
        projects: [...page.projects, project]
      })
      .then(() => {
        setNotify({
          message: 'Project uploaded successfully',
          visible: true,
          error: false
        })
        setLoading({ message: '', visible: false })
      })
      .catch((error) => {
        setNotify({ message: error.message, visible: true, error: true })
        setLoading({ message: '', visible: false })
      })
  }

  const onSubmit = async (e: FormEvent, formValues: InputValue) => {
    // get all the projects from the database
    const page = await firebase.getDocumentById('spa', 'page')

    // taking image from the form
    setLoading({ message: 'Uploading images...', visible: true })
    const imagesFileList = formValues.img as FileList

    // upload the images to firebase storage
    await firebase
      .uploadFilesToStorage(imagesFileList, 'projects')
      .then((uploadedImagePaths) => {
        setLoading({ message: 'Images uploaded', visible: true })

        // create the project object
        const project = {
          ...formValues,
          img: uploadedImagePaths
        }

        // create the project in the database
        setLoading({ message: 'Uploading Project', visible: true })
        uploadProject(page, project)
      })
      .catch(() => {
        setNotify({
          message: 'An error occurred while uploading the images',
          visible: true,
          error: true
        })
        setLoading({ message: '', visible: false })
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
