/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
  onAuthStateChanged
} from 'firebase/auth'

import { firebaseAppConfig } from '@/utils/firebaseAppConfig'

const app = initializeApp(firebaseAppConfig)

const provider = new GoogleAuthProvider()

const auth = getAuth(app)

// Function to authenticate with Google account
export const signInWithGoogle = (): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // check if user email matches admin_email AUTH_ADMIN_EMAIL
        if (result.user.email === process.env.NEXT_PUBLIC_AUTH_ADMIN_EMAIL) {
          resolve(result.user)
        } else {
          reject({
            message: 'You are not authorized to access this app',
            error: new Error('User are not authorized to access this content')
          })
        }
      })
      .catch((error) => {
        reject({
          message: 'Error authenticating with Google',
          error: new Error(error)
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
          message: 'Error signing out',
          error: new Error(error)
        })
      })
  })
}

// Check if a user is currently authenticated
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise<User | null>((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user && user.email === process.env.NEXT_PUBLIC_AUTH_ADMIN_EMAIL) {
          resolve(user)
        } else {
          resolve(null)
        }
      },
      (error) => {
        reject(error)
      }
    )
  })
}
