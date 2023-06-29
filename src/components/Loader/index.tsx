import * as S from './styles'

type Props = {
  visible: boolean
  message: string
}

const Loader = ({ visible, message }: Props) => {
  return (
    <S.Animate>
      {visible && (
        <S.Wrapper>
          <S.Image />
          <S.Message>{message}</S.Message>
        </S.Wrapper>
      )}
    </S.Animate>
  )
}

export default Loader
