import styled, { css, DefaultTheme } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { NotifyProps } from '@/types/notify'

type WrapperProps = Pick<NotifyProps, 'position' | 'duration' | 'type'>

const toastTypeModifiers = {
  info: (theme: DefaultTheme) => css`
    color: ${theme.palette.dark};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.palette.green};
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.palette.error};
  `
}

const toastTypeAfterModifiers = {
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.palette.dark};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.palette.green};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.palette.error};
  `
}

export const Wrapper = styled(motion.div).attrs<WrapperProps>((props) => ({
  initial: {
    opacity: 0,
    y: props.position === 'top' ? '-100%' : '100%',
    x: '-50%',
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  transition: {
    type: 'spring',
    damping: 15,
    stiffness: 210,
    velocity: 0.5,
    delay: 0.3,
    duration: 1
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: props.position === 'top' ? '-100%' : '100%'
  },
  whileHover: {
    scale: 1.03
  }
}))<WrapperProps>`
  ${({ theme, type, position }) => css`
    position: fixed;
    left: 50%;
    top: ${position === 'top' ? '2rem' : `calc(100% - 8rem )`};
    background: ${theme.palette.primary};
    color: ${theme.palette.dark};
    padding: ${theme.spacing.medium} ${theme.spacing.large};
    box-shadow: ${theme.shadow.box.small};
    border-radius: calc(${theme.border.radius} - 1rem);
    font-size: calc(${theme.font.size.medium} - 0.4rem);
    z-index: ${theme.layers.alwaysOnTop};
    ${!!type && toastTypeModifiers[type](theme)};
    user-select: none;
    /* font-weight: ${theme.font.semiBold}; */

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0.8rem;
      transform: translateY(-50%);
      border-top-left-radius: calc(${theme.border.radius} - 1rem);
      border-bottom-left-radius: calc(${theme.border.radius} - 1rem);
      width: 0.4rem;
      height: 60%;
      ${!!type && toastTypeAfterModifiers[type](theme)};
    }
  `};
`

export const Animate = styled(AnimatePresence)``
