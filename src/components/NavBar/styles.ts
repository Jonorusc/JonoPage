import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.nav<{ isDark?: boolean }>`
  ${({ theme, isDark }) => css`
    display: flex;
    position: fixed;
    top: ${theme.spacing.medium};
    left: 50%;
    transform: translate(-50%, 0);
    width: 107.3rem;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 0 calc(${theme.spacing.xlarge} - 7rem);
    user-select: none;
    z-index: ${theme.layers.alwaysOnTop};
    /* background */
    background: linear-gradient(
      266.21deg,
      ${theme.palette.secondary} -73.69%,
      ${theme.palette.darker} 62.14%
    );

    ${isDark &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `};

    border-radius: ${theme.border.radius};
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
      padding: 0 ${theme.spacing.medium};
      width: 95%;
    }

    /* tablet */
    @media screen and (max-width: 1024px) {
      width: 95%;
    }
  `};
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: calc(${({ theme }) => theme.spacing.medium} - 0.5rem);
`

export const ImageBox = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.whiteSmoke};
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.whiteSmoke};
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.bold};
    color: ${theme.palette.grey};
  `};
`

export const Menu = styled(Flex)<{ mobileViewPort?: boolean }>`
  ${({ theme, mobileViewPort }) => css`
    transition: all 0.5s ease-in;
    z-index: ${theme.layers.menu};
    /* mobile */
    @media screen and (max-width: 768px) {
      position: fixed;
      top: -100vh;
      left: 50%;
      transform: translate(-50%, 0);
      ${mobileViewPort &&
      css`
        top: calc(${theme.spacing.medium} + 6rem);
      `};
    }
  `};
`

export const MenuText = styled.span<{
  isActive?: boolean
}>`
  ${({ theme, isActive }) => css`
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.bold};
    color: ${isActive ? theme.palette.lightGreen : theme.palette.grey};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    position: relative;

    &:hover {
      color: ${theme.palette.lightGreen};
    }

    /* small mobile */
    @media screen and (max-width: 320px) {
      font-size: calc(${theme.font.size.small} + 0.5rem);
    }
  `};
`

// toggle button
export const Underline = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    right: 0;
    height: 0.1rem;
    background-color: ${theme.palette.lightGreen};
  `};
`

export const TogglerLine = styled.div.attrs({ className: 'line' })``

export const TogglerButton = styled.button<{
  isActive: boolean
}>`
  ${({ theme, isActive }) => css`
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    cursor: pointer;
    display: none;
    outline: none;
    border: none;
    background-color: transparent;
    z-index: ${theme.layers.alwaysOnTop};

    /* mobile */
    @media screen and (max-width: 768px) {
      display: block;
    }

    .line {
      width: 100%;
      height: 0.7rem;
      background-color: ${theme.palette.grey};
      position: absolute;
      left: 0;
      transition: transform 0.5s ease-in-out;
    }

    .line:nth-child(1) {
      top: 0;
      ${isActive &&
      css`
        transform: translateY(1.4rem) rotate(50deg);
      `};
    }

    .line:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      ${isActive &&
      css`
        animation: toRight 0.4s ease-in-out forwards;
      `};

      @keyframes toRight {
        0% {
          transform: translateX(100%);
        }
        100% {
          opacity: 0;
        }
      }
    }

    .line:nth-child(3) {
      bottom: 0;
      ${isActive &&
      css`
        transform: translateY(-1.4rem) rotate(-50deg);
      `};
    }
  `};
`
