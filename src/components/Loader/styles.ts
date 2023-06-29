import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 12rem;
    }
  `};
`

export const Image = styled(motion.img).attrs({
  src: '/images/uploading.svg',
  alt: 'Uploading image, an image that shows a folder with a arrow pointing up',
  initial: { opacity: 0, y: -10, scale: 0.5 },
  animate: {
    opacity: 1,
    y: 0,
    scale: [0.5, 0.9, 1],
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.7
    }
  },
  exit: { opacity: 0, y: 40, scale: 0.5 }
})`
  -webkit-user-drag: none;
`

export const Message = styled(motion.div).attrs({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 12,
    delay: 0.5
  }
})`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.small};
    font-size: ${theme.font.size.medium};
    color: ${theme.palette.whiteSmoke};
    text-shadow: ${theme.shadow.text.small} ${theme.palette.black};
  `};
`

export const Animate = styled(AnimatePresence)``
