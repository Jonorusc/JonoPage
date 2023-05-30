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

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJET_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Get Firestore instance
const db = getFirestore(app)

// Get Firebase Storage instance
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
        reject(error)
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
        reject(error)
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
        reject(error)
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
          reject(new Error('Document not found'))
        }
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

// Update a document in Firestore
export const updateDocument = (
  collectionName: string,
  documentId: string,
  data: any
): Promise<any> => {
  return updateDoc(doc(db, collectionName, documentId), data)
}

// Delete a document from Firestore
export const deleteDocument = (
  collectionName: string,
  documentId: string
): Promise<any> => {
  return deleteDoc(doc(db, collectionName, documentId))
}

// Upload a file to Firebase Storage

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
        reject(error)
      })
  })
}
