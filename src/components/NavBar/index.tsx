import { useState } from 'react'
import * as S from './styles'
import { NavBarProps } from '@/types/navbar'

const NavBar = ({ img, brand, dark = false }: NavBarProps) => {
  const [isActiveToggler, setIsActiveToggler] = useState(false)

  const togglerOnClickHandler = () => setIsActiveToggler(!isActiveToggler)

  return (
    <S.Wrapper isDark={dark}>
      <S.Flex>
        <S.ImageBox>
          <img src={img} alt="User Profile Picture" />
        </S.ImageBox>
        <S.Title>{brand}</S.Title>
      </S.Flex>

      <S.Menu mobileViewPort={isActiveToggler}>
        <S.MenuText isActive={true}>Home</S.MenuText>
        <S.MenuText>About</S.MenuText>
        <S.MenuText>Projects</S.MenuText>
        <S.MenuText>Contact</S.MenuText>
      </S.Menu>

      <S.TogglerButton
        onClick={togglerOnClickHandler}
        isActive={isActiveToggler}
      >
        <S.TogglerLine />
        <S.TogglerLine />
        <S.TogglerLine />
      </S.TogglerButton>
    </S.Wrapper>
  )
}

export default NavBar
