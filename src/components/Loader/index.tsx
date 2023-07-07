import * as S from './styles'

import ReactDom from 'react-dom'

type Props = {
  visible: boolean
  message: string
}

const Loader = ({ visible, message }: Props) => {
  if (typeof window === 'undefined') {
    return null
  }

  return ReactDom.createPortal(
    <S.Animate>
      {visible && (
        <S.Wrapper>
          <S.Image />
          <S.Message>{message}</S.Message>
        </S.Wrapper>
      )}
    </S.Animate>,
    document.body
  )
}

export default Loader
