import * as S from './styles'
import { ButtonProps } from '@/types/button'
import { isValidElement } from 'react'

const Button = ({
  text,
  onClick,
  bgColor = 'darker',
  color = 'primary',
  fontSize = 'medium',
  fontWeight = 'normal',
  icon,
  iconPosition = 'right'
}: ButtonProps) => {
  const hasIcon = isValidElement(icon)

  return (
    <S.Wrapper
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {!!hasIcon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      <S.Text iconPosition={iconPosition}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
