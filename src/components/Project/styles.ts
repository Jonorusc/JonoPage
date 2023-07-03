import styled, { css } from 'styled-components'
import { ImageBox } from '@/components/NavBar/styles'
import { motion } from 'framer-motion'

export const Motion = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', duration: 0.4, delay: 0.3 }
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: [10],
    x: [-10, -10, 0, -100],
    transition: { duration: 0.5 }
  }
})``

export const Wrapper = styled(ImageBox)`
  ${({ theme }) => css`
    width: min(41.2rem, 100%);
    height: 30rem;

    border: none;
    border-radius: ${theme.border.radius};

    &:hover {
      ${Link} {
        visibility: visible;
        pointer-events: auto;
        transform: translate(-50%, -50%) scale(1);
        cursor: pointer;

        &::after {
          content: 'Open project';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          font-size: calc(${theme.font.size.medium} - 1rem);
          width: 8rem;
          text-align: center;
          color: ${theme.palette.whiteSmoke};
        }
      }

      ${Close} {
        visibility: visible;
        pointer-events: auto;
        transform: scale(1);
        cursor: pointer;

        &::after {
          content: 'Exclude project';
          position: absolute;
          top: 50%;
          left: -20%;
          transform: translate(-100%, -50%);
          background-color: ${theme.palette.dark};
          padding: ${theme.spacing.small};
          text-align: center;
          width: 10rem;
          height: 50%;
          color: ${theme.palette.whiteSmoke};
          border-top: 0.5rem solid transparent;
          border-bottom: 0.5rem solid transparent;
          border-left: 0.5rem solid ${theme.palette.dark};
          border-radius: 0.5rem;
          box-shadow: ${theme.shadow.box.small};
          font-weight: ${theme.font.semiBold};
          transition: all 0.2s ease-in;
          transition-delay: 0.2s;
        }
      }
    }
  `};
`
export const Close = styled.button.attrs({
  type: 'button'
})`
  ${({ theme }) => css`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    outline: none;
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    background-color: transparent;
    z-index: ${theme.layers.overlay};
    pointer-events: none;
    visibility: hidden;
    transform: scale(0.8);
    transition: all 0.2s ease-in;
    transition-delay: 0.2s;

    svg {
      width: inherit;
      height: inherit;
      color: ${theme.palette.whiteSmoke};
      box-shadow: ${theme.shadow.box.small};
    }
  `};
`

export const Title = styled.h2`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.2rem;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.semiBold};
    color: ${theme.palette.whiteSmoke};
    text-align: center;
    margin-top: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.small};
    background-color: rgba(0, 0, 0, 0.5);
  `};
`
export const Link = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    z-index: ${theme.layers.overlay};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    visibility: hidden;
    transition: all 0.2s ease-in;
    transition-delay: 0.2s;

    svg {
      width: inherit;
      height: inherit;
      color: ${theme.palette.whiteSmoke};
      opacity: 0.8;
    }
  `};
`
