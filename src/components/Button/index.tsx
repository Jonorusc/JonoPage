import * as S from './styles'
import { ButtonProps } from '@/types/button'

const Button = ({
  text,
  onClick,
  bgcolor = 'darker',
  color = 'primary',
  fontSize = 'medium',
  fontWeight = 'normal',
  icon = null,
  iconposition = 'right',
  type = 'button'
}: ButtonProps) => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    !!onClick && typeof onClick === 'function' && onClick(event)
  }

  return (
    <S.Wrapper
      bgcolor={bgcolor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={handleOnClick}
      icon={icon}
      type={type}
    >
      {!!icon && <S.Icon iconposition={iconposition}>{icon}</S.Icon>}
      <S.Text iconposition={iconposition}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
