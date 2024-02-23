import * as S from './styles'

import { defaultTheme } from '@/components/themes/defaultTheme'
import { Container } from '@/components/Container'
import { GridCenter } from '@/components/Flex'

import { AboutProps } from '@/types/spa'

import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const About = ({ title, paragraph }: AboutProps) => {
  const [theme] = useLocalStorage('theme', defaultTheme)
  const paragraphHTML = { __html: paragraph }
  const titleHTML = { __html: title }
  const targetRef = useRef(null)
  // const springConfig = {
  //   stiffness: 400,
  //   damping: 90
  // }
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const scaleTitle = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const yTitle = useTransform(scrollYProgress, [0, 0.25], [0, -130])

  const scaleParagraph = useTransform(
    scrollYProgress,
    [0.25, 0.55, 0.8],
    [0.9, 0.9, 1]
  )
  const yParagraph = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.55, 0.8],
    [0, -110, -150, -220]
  )
  const opacityParagraph = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.55, 0.8],
    [0, 1, 1, 0]
  )

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.8, 0.83],
    ['', theme.bodyColor]
  )

  return (
    <S.Wrapper
      ref={targetRef}
      cssText="position: relative; text-align: center;"
      height="200vh"
      style={{ background: backgroundColor }}
      background="darker"
      id="about"
    >
      <Container>
        <GridCenter>
          <S.Text
            style={{
              scale: scaleTitle,
              opacity: opacityTitle,
              y: yTitle,
              x: '-50%'
            }}
            dangerouslySetInnerHTML={titleHTML}
          />
          <S.Text
            style={{
              scale: scaleParagraph,
              y: yParagraph,
              x: '-50%',
              opacity: opacityParagraph
            }}
            dangerouslySetInnerHTML={paragraphHTML}
          />
        </GridCenter>
      </Container>
    </S.Wrapper>
  )
}

export default About
