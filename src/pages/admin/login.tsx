import LoginPage from '@/templates/Admin/Login'
import { signInWithGoogle } from '@/firebase/auth'
import { useRouter } from 'next/router'
const Login = () => {
  const router = useRouter()

  const onSubmit = () =>
    signInWithGoogle().then(() => {
      router.push('/admin/')
    })

  return (
    <main>
      <LoginPage title="Prove that you're Lucas (me)" onSubmit={onSubmit} />
    </main>
  )
}

export default Login
