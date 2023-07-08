import * as S from './styles'
import { SpaProps } from '@/types/spa'

const Template = (props: SpaProps) => {
  return <S.Wrapper>{props?.about?.paragraph || 'hello word'}</S.Wrapper>
}

export default Template
