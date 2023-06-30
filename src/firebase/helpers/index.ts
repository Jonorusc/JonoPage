import { InputValue } from '@/types/form'
import { SpaProps, Project } from '@/types/spa'
import eventEmitter from '@/components/Events'

import {
  uploadFilesToStorage,
  createOrUpdateDocument,
  getDocumentById
} from '@/firebase/crud'

export const uploadProject = async (formValues: InputValue) => {
  // get all the projects from the database
  const page: SpaProps = await getDocumentById('spa', 'page')

  eventEmitter.emit('up-uploading', 'Uploading images...')
  const imagesFileList = formValues.img as FileList

  // upload the images to firebase storage
  await uploadFilesToStorage(imagesFileList, 'projects')
    .then(async (uploadedImagePaths) => {
      eventEmitter.emit('up-uploading', 'Images uploaded')

      // create the slogan from form values title
      const slogan = formValues.title as string

      // create the project object
      const project: Project = {
        title: formValues.title as string,
        description: formValues.description as string,
        source: formValues.source as string,
        readme: formValues.readme as string,
        img: uploadedImagePaths,
        slogan: slogan.split(' ').join('-').toLowerCase() // replace spaces with dashes and make it lowercase
      }

      // create the project in the database
      eventEmitter.emit('up-uploading', 'Uploading project...')
      await createOrUpdateDocument({
        ...page,
        projects: [...page.projects, project]
      })
        .then(() => {
          eventEmitter.emit('up-uploadsuccess', 'Project uploaded')
        })
        .catch(() => {
          eventEmitter.emit(
            'up-uploaderror',
            'An error occurred while uploading the project'
          )
        })
    })
    .catch(() => {
      eventEmitter.emit(
        'uploaderror',
        'An error occurred while uploading the images'
      )
    })
}
