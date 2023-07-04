// Purpose: Firebase helper functions.
/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputValue } from '@/types/form'
import { SpaProps, Project } from '@/types/spa'
import eventEmitter from '@/components/Events'

import {
  uploadFilesToStorage,
  createOrUpdateDocument,
  getDocumentById,
  deleteImagesFromStorage
} from '@/firebase/crud'

// create the listeners for the upload events
function on(event: string, callback: (data: any) => void) {
  eventEmitter.on(event, callback)
}

export const updateOrCreatePage = (formValues: InputValue) => {
  return {
    promise: new Promise((resolve, reject) => {
      // get page from the database
      getDocumentById('spa', 'page').then(async (page: SpaProps) => {
        eventEmitter.emit('uploading', 'Uploading navbar image...')

        // get the images from the form values
        const imagesFileList = formValues.navbarimg as FileList

        // upload the images to firebase storage
        try {
          let uploadedImagePaths: string[] = []

          if (imagesFileList) {
            uploadedImagePaths = await uploadFilesToStorage(
              imagesFileList,
              'page'
            )
            eventEmitter.emit('uploading', 'Image uploaded')
          } else {
            eventEmitter.emit('uploading', 'No image uploaded')
          }

          // create the page object
          const spa: SpaProps = {
            home: {
              brand: formValues.homebrand as string,
              btnText: formValues.homebtn as string
            },
            navbar: {
              brand: formValues.navbarbrand as string,
              img: imagesFileList ? uploadedImagePaths[0] : page.navbar.img
            },
            about: {
              title: formValues.abouttitle as string,
              paragraph: formValues.aboutparagraph as string
            },
            projects: page.projects,
            footer: {
              title: formValues.footertitle as string,
              socialMedia: {
                ...page.footer.socialMedia,
                youtube: formValues.footeryt as string,
                instagram: formValues.footerig as string
              },
              pageSource: formValues.footerpagesource as string
            }
          }

          // create or update the page in the database
          eventEmitter.emit('uploading', 'Uploading page...')
          await createOrUpdateDocument(spa)
          eventEmitter.emit('uploadsuccess', 'Page uploaded')
          resolve('success')
        } catch (error) {
          eventEmitter.emit(
            'uploaderror',
            'An error occurred while uploading the page'
          )
          reject(error)
        }
      })
    }),
    on
  }
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

          // exclude the images from firebase storage
          const images = page.projects.find((p) => p.slogan === slogan)?.img
          if (images) {
            eventEmitter.emit('deleting', 'Excluding images...')
            deleteImagesFromStorage(images)
              .then(() => {
                eventEmitter.emit('deletesuccess', 'Images excluded')
              })
              .catch((error) => {
                eventEmitter.emit(
                  'deleteerror',
                  'An error occurred while excluding the images'
                )
                reject(error)
              })
          }

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
