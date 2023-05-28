import { useState } from 'react'
import * as S from './styles'

export type NavBarProps = {
  img: string
  dark?: boolean
}

const NavBar = ({ img, dark = false }: NavBarProps) => {
  const [isActiveToggler, setIsActiveToggler] = useState(false)

  const togglerOnClickHundler = () => setIsActiveToggler(!isActiveToggler)

  return (
    <S.Wrapper isDark={dark}>
      <S.Flex>
        <S.ImageBox>
          <img src={img} alt="User Profile Picture" />
        </S.ImageBox>
        <S.Title>Jaum.lu</S.Title>
      </S.Flex>

      <S.Flex>
        <S.MenuText isActive={true}>Home</S.MenuText>
        <S.MenuText>About</S.MenuText>
        <S.MenuText>Projects</S.MenuText>
        <S.MenuText>Contact</S.MenuText>
      </S.Flex>

      <S.TogglerButton
        onClick={togglerOnClickHundler}
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
