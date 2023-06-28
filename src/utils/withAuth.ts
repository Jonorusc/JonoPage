/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect } from 'react'
import { getCurrentUser } from '@/firebase/auth'
import { useRouter } from 'next/router'
type Props = {
  children:
    | React.ReactComponentElement<any>
    | React.ReactElement<any>
    | ReactElement<any, any>
    | null
}

const WithAuth = ({ children }: Props) => {
  const router = useRouter()
  const user = getCurrentUser()

  useEffect(() => {
    if (!user) {
      router.push('/admin/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return null
  }

  return children
}

export default WithAuth
