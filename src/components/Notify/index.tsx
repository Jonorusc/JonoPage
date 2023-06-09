import * as S from './styles'
import { NotifyProps } from '@/types/notify'
import { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const Notify = ({
  message,
  type = 'success',
  duration = 3000,
  position = 'bottom',
  visible = true,
  onClose
}: NotifyProps) => {
  const [visibleState, setVisibleState] = useState(visible)

  useEffect(() => {
    let timer: NodeJS.Timeout

    setVisibleState(visible)

    if (visible) {
      timer = setTimeout(() => {
        setVisibleState(false)
        onClose && onClose()
      }, duration)
    }

    return () => {
      clearTimeout(timer)
      setVisibleState(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (typeof window === 'undefined') {
    return null
  }

  return ReactDom.createPortal(
    <S.Animate>
      {visibleState && (
        <S.Wrapper type={type} duration={duration} position={position}>
          <span>{message}</span>
        </S.Wrapper>
      )}
    </S.Animate>,
    document.body
  )
}

export default Notify
