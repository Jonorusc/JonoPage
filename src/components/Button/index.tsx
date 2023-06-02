import * as S from './styles'
import { ButtonProps } from '@/types/button'

const Button = ({
  text,
  onClick,
  bgColor = 'darker',
  color = 'primary',
  fontSize = 'medium',
  fontWeight = 'normal',
  icon = null,
  iconPosition = 'right'
}: ButtonProps) => {
  return (
    <S.Wrapper
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
      icon={icon}
    >
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      <S.Text iconPosition={iconPosition}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
