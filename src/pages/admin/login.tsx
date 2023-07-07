import LoginPage from '@/templates/Admin/Login'
import { signInWithGoogle } from '@/firebase/auth'
import { useRouter } from 'next/router'
import Notify from '@/components/Notify'
import { useState } from 'react'
import { NextSeo } from 'next-seo'

const Login = () => {
  const [message, setMessage] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    try {
      signInWithGoogle()
        .then(() => {
          router.push('/admin/')
        })
        .catch((error) => {
          setMessage(error.message)
        })
    } catch (error) {
      setMessage('Something went wrong, try again later')
    }
  }

  return (
    <main>
      <NextSeo title="Login" />
      <LoginPage title="Prove that you're Lucas (me)" onSubmit={onSubmit} />
      <Notify
        message={message}
        type="error"
        visible={!!message}
        onClose={() => setMessage('')}
      />
    </main>
  )
}

export default Login
