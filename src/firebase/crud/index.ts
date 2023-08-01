/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app'
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getFirestore
} from 'firebase/firestore'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import { firebaseAppConfig } from '@/utils/firebaseAppConfig'
const app = initializeApp(firebaseAppConfig)

const db = getFirestore(app)

const storage = getStorage(app)

// Create a document in Firestore collection
export const createDocument = (
  collectionName: string,
  data: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, collectionName), data)
      .then((docRef: any) => {
        resolve(docRef.id)
      })
      .catch((error) => {
        reject({
          message: 'Error creating document',
          error: new Error(error)
        })
      })
  })
}

// Create or update a document in Firestore collection
export const createOrUpdateDocument = (
  data: any,
  collectionName = 'spa',
  documentId = 'page'
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const documentRef = doc(db, collectionName, documentId)
    setDoc(documentRef, data)
      .then(() => {
        resolve({ id: documentId, ...data })
      })
      .catch((error) => {
        reject({
          message: 'Error creating or updating document',
          error: new Error(error)
        })
      })
  })
}

// Get all documents from a Firestore collection
export const getDocuments = (collectionName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, collectionName))
      .then((querySnapshot: any) => {
        const documents = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data()
        }))
        resolve(documents)
      })
      .catch((error) => {
        reject({
          message: 'Error getting documents',
          error: new Error(error)
        })
      })
  })
}

// Get a document from Firestore by ID
export const getDocumentById = (
  collectionName: string,
  documentId: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, collectionName, documentId))
      .then((docSnap: any) => {
        if (docSnap.exists()) {
          const document = { id: docSnap.id, ...docSnap.data() }
          resolve(document)
        } else {
          reject({
            message: 'Document not found (GetDocumentById)',
            error: new Error('Document not found')
          })
        }
      })
      .catch((error) => {
        reject({
          message: 'Error getting document',
          error: new Error(error)
        })
      })
  })
}

// Update a document in Firestore
export const updateDocument = (
  collectionName: string,
  documentId: string,
  data: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const documentRef = doc(db, collectionName, documentId)
    updateDoc(documentRef, data)
      .then(() => {
        resolve({ message: 'Document updated successfully' })
      })
      .catch((error) => {
        reject({
          message: 'Error updating document',
          error: new Error(error)
        })
      })
  })
}

// Delete a document from Firestore
export const deleteDocument = (
  collectionName: string,
  documentId: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    deleteDoc(doc(db, collectionName, documentId))
      .then(() => {
        resolve({
          message: 'Document deleted successfully'
        })
      })
      .catch((error) => {
        reject({
          message: 'Error deleting document',
          error: new Error(error)
        })
      })
  })
}

// Upload an image to Firebase Storage and store the path in Firestore
export const uploadFilesToStorage = async (
  fileList: FileList,
  document: string,
  collectionName = 'spa'
): Promise<string[]> => {
  const uploadPromises = Object.values(fileList).map(async (file) => {
    const storageRef = ref(
      storage,
      `${collectionName}/${document}/${file.name}`
    )
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  })

  return Promise.all(uploadPromises)
}

// delete an image from Firebase Storage
export const deleteImagesFromStorage = async (
  imageUrls: string[]
): Promise<void[]> => {
  const deletePromises = imageUrls.map(async (imageUrl) => {
    const path = extractStoragePathFromUrl(imageUrl)
    if (path) {
      const storageRef = ref(storage, path)
      await deleteObject(storageRef)
    }
  })

  return Promise.all(deletePromises)
}

const extractStoragePathFromUrl = (imageUrl: string): string | null => {
  const match = imageUrl.match(/\/o\/(.+)\?/)
  if (match && match[1]) {
    return decodeURIComponent(match[1])
  }
  return null
}
