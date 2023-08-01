import * as S from './styles'

import { defaultTheme } from '@/components/themes/defaultTheme'
import { Container } from '@/components/Container'
import { GridCenter } from '@/components/Flex'

import { HomeProps } from '@/types/spa'

import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const Home = ({ brand, btnText }: HomeProps) => {
  const [theme] = useLocalStorage('theme', defaultTheme)
  const brandHTML = { __html: brand }
  const targetRef = useRef(null)
  // framer-motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  })
  const opacityBtn = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 1],
    ['', theme.palette.darker]
  )

  return (
    <S.HomeWrapper
      ref={targetRef}
      style={{ background: backgroundColor }}
      id="home"
    >
      <Container>
        <GridCenter>
          <S.GradientText
            dangerouslySetInnerHTML={brandHTML}
            style={{ y, opacity: opacityText }}
          />
          <S.Btn style={{ opacity: opacityBtn, y, scale }}>{btnText}</S.Btn>
        </GridCenter>
      </Container>
    </S.HomeWrapper>
  )
}

export default Home
