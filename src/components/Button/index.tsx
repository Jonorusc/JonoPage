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
  iconPosition = 'right',
  type = 'button'
}: ButtonProps) => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    !!onClick && typeof onClick === 'function' && onClick(event)
  }

  return (
    <S.Wrapper
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={handleOnClick}
      icon={icon}
      type={type}
    >
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      <S.Text iconPosition={iconPosition}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
