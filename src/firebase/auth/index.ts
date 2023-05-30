/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User
} from 'firebase/auth'

const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJET_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
})

const provider = new GoogleAuthProvider()

const auth = getAuth(app)

// Function to authenticate with Google account
export const signInWithGoogle = (): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // check if user email matches admin_email AUTH_ADMIN_EMAIL
        if (result.user.email === process.env.AUTH_ADMIN_EMAIL) {
          resolve(result.user)
        } else {
          reject({
            message: new Error('You are not authorized to access this app'),
            error: null
          })
        }
      })
      .catch((error) => {
        reject({
          message: new Error('Error authenticating with Google'),
          error
        })
      })
  })
}

// Function to sign out the user
export const signOutUser = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve('Signed out successfully')
      })
      .catch((error) => {
        reject({
          message: new Error('Error signing out'),
          error
        })
      })
  })
}

// Check if a user is currently authenticated
export const getCurrentUser = (): User | null => {
  return auth.currentUser
}
