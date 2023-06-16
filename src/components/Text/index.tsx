import * as S from './styles'
import { TextProps } from '@/types/text'
const Text = ({
  size = 'small',
  color,
  isTitle = false,
  icon = null,
  iconPosition = 'left',
  gap = '0.5rem',
  uppercase = false,
  children
}: TextProps) => {
  if (!children) return null

  return (
    <S.Wrapper
      size={size}
      color={color}
      isTitle={isTitle}
      gap={gap}
      uppercase={uppercase}
    >
      <S.Text dangerouslySetInnerHTML={{ __html: children }} />
      {icon ? <S.Icon iconPosition={iconPosition}>{icon}</S.Icon> : null}
    </S.Wrapper>
  )
}

export default Text
