import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div).attrs({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 }
})`
  ${({ theme }) => css`
    background-color: ${theme.palette.darker};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacing.small};
    height: 18rem;
    width: 30rem;
    /* create a arrow top  */
    color: ${theme.palette.whiteSmoke};
    backdrop-filter: blur(0.5rem);
    writing-mode: horizontal-tb;
    filter: drop-shadow(${theme.shadow.box.small} ${theme.palette.dark});
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      /* arrow on top */
      border-left: 1rem solid transparent;
      border-right: 1rem solid transparent;
      border-bottom: 1rem solid ${theme.palette.darker};

      /* not mobile */
      @media screen and (min-width: 769px) {
        /* arrow on the right side */
        left: auto;
        right: -1rem;
        top: 50%;
        right: -3rem;
        border-left: 1rem solid ${theme.palette.darker};
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
      }
    }

    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  `};
`

export const Flag = styled.div`
  width: calc(100% / 2 - 1rem);
  height: 8.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:active {
    transform: scale(0.9);
  }

  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`
