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
import { getStorage, ref, uploadString } from 'firebase/storage'
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
      .catch((error: any) => {
        reject({
          message: new Error('Error creating document'),
          error
        })
      })
  })
}

// Create or update a document in Firestore collection
export const createOrUpdateDocument = (
  collectionName: string,
  documentId: string,
  data: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const documentRef = doc(db, collectionName, documentId)
    setDoc(documentRef, data)
      .then(() => {
        resolve({ id: documentId, ...data })
      })
      .catch((error: any) => {
        reject({
          message: new Error('Error creating or updating document'),
          error
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
      .catch((error: any) => {
        reject({
          message: new Error('Error getting documents'),
          error
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
            message: new Error('Document not found'),
            error: null
          })
        }
      })
      .catch((error: any) => {
        reject({
          message: new Error('Error getting document'),
          error
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
      .catch((error: any) => {
        reject({
          message: new Error('Error updating document'),
          error
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
      .catch((error: any) => {
        reject({
          message: new Error('Error deleting document'),
          error
        })
      })
  })
}

// Upload an image to Firebase Storage and store the path in Firestore
export const uploadImage = (
  imageData: string,
  collectionName: string,
  documentId: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `images/${documentId}.jpg`)
    uploadString(storageRef, imageData, 'data_url')
      .then(async () => {
        const imagePath = `images/${documentId}.jpg`
        const documentRef = doc(db, collectionName, documentId)
        await setDoc(documentRef, { imagePath })
        resolve(imagePath)
      })
      .catch((error) => {
        reject({
          message: new Error('Error uploading image'),
          error
        })
      })
  })
}
