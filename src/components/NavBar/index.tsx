import { useState, useEffect } from 'react'
import * as S from './styles'
import { NavBarProps } from '@/types/navbar'

import { menuTexts, handleScroll, scrollTo } from './helpers'

const NavBar = ({ img, brand, dark = false }: NavBarProps) => {
  const [isActiveToggler, setIsActiveToggler] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState(menuTexts[0])

  const togglerOnClickHandler = () => setIsActiveToggler(!isActiveToggler)

  // Close toggler when window width is greater than 768px
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 768) setIsActiveToggler(false)
    }
    const cleanup = handleScroll(setSelectedMenu)
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      cleanup()
    }
  }, [])

  const handleClick = (text: string) => {
    setSelectedMenu(text)
    scrollTo(text)
    setIsActiveToggler(false)
  }

  return (
    <S.Wrapper isDark={dark}>
      <S.Flex>
        <S.ImageBox>
          <img src={img} alt="User Profile Picture" />
        </S.ImageBox>
        <S.Title>{brand}</S.Title>
      </S.Flex>

      <S.Menu mobileViewPort={isActiveToggler}>
        {menuTexts.map((text, index) => (
          <S.MenuText
            key={index}
            onClick={() => handleClick(text)}
            isActive={selectedMenu === text}
          >
            {text}
            {selectedMenu === text && !isActiveToggler && (
              <S.Underline layoutId="underline" />
            )}
          </S.MenuText>
        ))}
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
