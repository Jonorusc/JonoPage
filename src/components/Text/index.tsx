import * as S from './styles'
import { TextProps } from '@/types/text'
const Text = ({
  size = 'small',
  color,
  istitle = false,
  icon = null,
  iconposition = 'left',
  gap = '0.5rem',
  up = false,
  m = '',
  mt = '',
  mb = '',
  mr = '',
  ml = '',
  children
}: TextProps) => {
  if (!children) return null

  return (
    <S.Wrapper
      size={size}
      color={color}
      istitle={istitle ? istitle : undefined}
      gap={gap}
      m={m}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      up={up ? up : undefined}
    >
      <S.Text dangerouslySetInnerHTML={{ __html: children }} />
      {icon ? <S.Icon iconposition={iconposition}>{icon}</S.Icon> : null}
    </S.Wrapper>
  )
}

export default Text
