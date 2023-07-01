// Purpose: Firebase helper functions.
/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputValue } from '@/types/form'
import { SpaProps, Project } from '@/types/spa'
import eventEmitter from '@/components/Events'

import {
  uploadFilesToStorage,
  createOrUpdateDocument,
  getDocumentById
} from '@/firebase/crud'

// create the listeners for the upload events
function on(event: string, callback: (data: any) => void) {
  eventEmitter.on(event, callback)
}

export const uploadProject = (formValues: InputValue) => {
  return {
    promise: new Promise((resolve, reject) => {
      // get all the projects from the database
      getDocumentById('spa', 'page')
        .then(async (page: SpaProps) => {
          eventEmitter.emit('uploading', 'Uploading images...')
          const imagesFileList = formValues.img as FileList

          // upload the images to firebase storage
          try {
            const uploadedImagePaths = await uploadFilesToStorage(
              imagesFileList,
              'projects'
            )
            eventEmitter.emit('uploading', 'Images uploaded')

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
            eventEmitter.emit('uploading', 'Uploading project...')
            await createOrUpdateDocument({
              ...page,
              projects: [...page.projects, project]
            })
            eventEmitter.emit('uploadsuccess', 'Project uploaded')
            resolve('success')
          } catch (error) {
            eventEmitter.emit(
              'uploaderror',
              'An error occurred while uploading the project'
            )
            reject(error)
          }
        })
        .catch((error) => {
          eventEmitter.emit(
            'uploaderror',
            'An error occurred while getting the document'
          )
          reject(error)
        })
    }),
    on
  }
}

export const excludeProject = (slogan: string) => {
  return {
    promise: new Promise((resolve, reject) => {
      // Get all the projects from the database
      getDocumentById('spa', 'page')
        .then((page: SpaProps) => {
          // Exclude the project from the projects array
          const projects = page.projects.filter((p) => p.slogan !== slogan)

          // Create the project in the database
          eventEmitter.emit('deleting', 'Excluding project...')
          createOrUpdateDocument({
            ...page,
            projects
          })
            .then(() => {
              eventEmitter.emit('deletesuccess', 'Project excluded')
              resolve('success')
            })
            .catch((error) => {
              eventEmitter.emit(
                'deleteerror',
                'An error occurred while excluding the project'
              )
              reject(error)
            })
        })
        .catch((error) => {
          eventEmitter.emit(
            'deleteerror',
            'An error occurred while retrieving the projects'
          )
          reject(error)
        })
    }),
    on
  }
}
