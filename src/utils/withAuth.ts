/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect, useState } from 'react'
import { getCurrentUser } from '@/firebase/auth'
import { useRouter } from 'next/router'
import { User } from 'firebase/auth'
type Props = {
  children:
    | React.ReactComponentElement<any>
    | React.ReactElement<any>
    | ReactElement<any, any>
    | null
}

const WithAuth = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()
  useEffect(() => {
    const getUser = async () => {
      await getCurrentUser().then((res) => {
        if (res) {
          setUser(res)
        } else {
          router.push('/admin/login')
        }
      })
    }

    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return null
  }

  return children
}

export default WithAuth
