import styled, { css } from 'styled-components'
import { Flex } from '@/components/Flex'
import { Wrapper as Text } from '@/components/Text/styles'
import { motion, AnimatePresence } from 'framer-motion'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s ease-in-out;
  `};
`

export const Dialog = styled(motion.div).attrs({
  role: 'dialog',
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: [-10, 10, 20, -20, 0],
    transition: { type: 'spring', duration: 0.4, delay: 0.3 }
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    transition: { duration: 0.2 }
  }
})`
  ${({ theme }) => css`
    background-color: ${theme.palette.whiteSmoke};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    width: min(30rem, fit-content);
    text-size-adjust: 100%;
    display: grid;
    place-items: center;
    word-wrap: break-word;

    ${Text} {
      margin-bottom: ${theme.spacing.small};
      user-select: none;
    }

    ${Flex} {
      margin-top: ${theme.spacing.small};
      align-items: flex-end;
      justify-content: center;
    }
  `}
`

export const Animate = styled(AnimatePresence)``
