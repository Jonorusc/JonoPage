import * as S from './styles'

import { defaultTheme } from '@/components/themes/defaultTheme'
import { Container } from '@/components/Container'
import { GridCenter } from '@/components/Flex'
import Text from '@/components/Text'

import { AboutProps } from '@/types/spa'

import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const About = ({ title, paragraph }: AboutProps) => {
  const [theme] = useLocalStorage('theme', defaultTheme)
  const paragraphHTML = { __html: paragraph }
  const targetRef = useRef(null)
  const springConfig = {
    stiffness: 400,
    damping: 90
  }
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end']
  })

  const scaleTitle = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const opacityTitle = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const yTitle = useTransform(scrollYProgress, [0, 0.25], [0, -130])

  const scaleParagraph = useTransform(scrollYProgress, [0.25, 0.55], [0.9, 1.2])
  const yParagraph = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.55],
    [0, -100, -150]
  )
  const opacityParagraph = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.55],
    [0, 1, 0]
  )

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.55, 0.66],
    ['', theme.bodyColor]
  )

  const scaleBrazil = useSpring(
    useTransform(scrollYProgress, [0.67, 0.7], [0, 1]),
    springConfig
  )
  const opacityBrazil = useTransform(
    scrollYProgress,
    [0.67, 0.7, 0.78, 0.83, 0.9, 0.98, 1],
    [0, 1, 1, 1, 1, 1, 0]
  )
  const xBrazil = useSpring(
    useTransform(
      scrollYProgress,
      [0.7, 0.78, 0.83, 0.9, 0.98],
      [0, 0, -100, -200, -300]
    ),
    springConfig
  )

  const opacityPin = useTransform(scrollYProgress, [0.78, 0.83], [0, 1])
  const yPin = useSpring(
    useTransform(scrollYProgress, [0.78, 0.83], [-100, 0]),
    springConfig
  )
  const xPin = useSpring(
    useTransform(scrollYProgress, [0.78, 0.83], [0, 100]),
    springConfig
  )

  return (
    <S.Wrapper
      ref={targetRef}
      cssText="position: relative; text-align: center;"
      height="600vh"
      style={{ background: backgroundColor }}
      background="darker"
    >
      <Container>
        <GridCenter>
          <S.Text
            style={{
              scale: scaleTitle,
              opacity: opacityTitle,
              y: yTitle
            }}
          >
            {title}
          </S.Text>
          <S.Text
            style={{
              scale: scaleParagraph,
              y: yParagraph,
              opacity: opacityParagraph
            }}
            dangerouslySetInnerHTML={paragraphHTML}
          />
          <S.Div
            style={{
              position: 'fixed',
              top: '10%',
              scale: scaleBrazil,
              opacity: opacityBrazil,
              x: xBrazil
            }}
          >
            <S.Brazil />
            <S.Div
              style={{
                position: 'absolute',
                top: '15%',
                left: '67%',
                y: yPin,
                x: xPin,
                opacity: opacityPin
              }}
            >
              <Text color="blueGreen" size="xlarge">
                I'm here
              </Text>
              <S.Pin />
            </S.Div>
          </S.Div>
        </GridCenter>
      </Container>
    </S.Wrapper>
  )
}

export default About
