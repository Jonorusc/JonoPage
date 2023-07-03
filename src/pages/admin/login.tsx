import LoginPage from '@/templates/Admin/Login'
import { signInWithGoogle } from '@/firebase/auth'
import { useRouter } from 'next/router'
import Notify from '@/components/Notify'
import { useState } from 'react'

const Login = () => {
  const [message, setMessage] = useState('')
  const router = useRouter()

  const onSubmit = () =>
    signInWithGoogle()
      .then(() => {
        router.push('/admin/')
      })
      .catch((error) => {
        setMessage(error.message)
      })

  return (
    <main>
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
