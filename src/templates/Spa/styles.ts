import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Colors } from '@/types/colors'
import { Input } from '@/components/Input/styles'
import { FlexColumn, Flex } from '@/components/Flex'
import { Wrapper as Button } from '@/components/Button/styles'
import { Wrapper as TagInput } from '@/components/TagsInput/styles'

export const backgroundGradient = `
  radial-gradient(
    circle,
    rgba(17, 43, 62, 1) 0%,
    rgba(20, 28, 34, 1) 100%
  );
`

export const Wrapper = styled(motion.section)<{
  height?: string
  cssText?: string
  background?: Colors
}>`
  ${({ theme, height, cssText, background }) => css`
    background-color: ${background
      ? theme.palette[background]
      : theme.bodyColor};

    color: ${theme.palette.whiteSmoke};
    transition: all 0.5s ease-in-out;
    height: ${height || '100vh'};
    width: 100%;

    ${!!cssText &&
    css`
      ${cssText}
    `};

    textarea {
      background: #d9d9d9;
      color: rgba(20, 28, 34, 0.6);
      max-width: unset;
      width: 100%;
      padding-left: 3rem;
      &::placeholder {
        color: rgba(20, 28, 34, 0.6);
      }
      overflow: hidden;
    }

    ${Flex} {
      justify-content: space-between;
    }

    ${Input} {
      border-radius: 3rem;
      background: #d9d9d9;
      color: rgba(20, 28, 34, 0.6);
      max-width: 35rem;
      @media screen and (max-width: 768px) {
        width: 100%;
        max-width: unset;
      }
      box-sizing: border-box;
      padding: 3rem 2rem;
      &::placeholder {
        color: rgba(20, 28, 34, 0.6);
      }
    }

    ${FlexColumn} {
      max-width: 700px;
      width: 100%;
      /* @media screen and (max-width: 768px) {
        padding: 0 ${theme.spacing.small};
      } */
    }

    ${Button} {
      padding: 3rem;
    }

    ${TagInput} {
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    form {
      button[type='submit'] {
        width: 100%;
        justify-content: center;
        column-gap: 0;
      }
    }

    /* mobile */
    @media screen and (max-width: 768px) {
      margin-bottom: 5rem;
    }
  `};
`

export const HomeWrapper = styled(motion.section)`
  ${({ theme }) => css`
    background-color: ${theme.palette.darker};
    background: ${backgroundGradient};
    height: 150vh;
    mask-image: url('/images/mask-jonopage.png');
    -webkit-mask-image: url('/images/mask-jonopage.png');
    mask-size: cover;
    -webkit-mask-size: cover;
    mask-position: 3% -100px;
    -webkit-mask-position: 3% -100px;
    mask-repeat: none;
    -webkit-mask-repeat: none;
    transition: all 0.5 ease-in;
    animation: dye 1.3s steps(20) forwards;

    img[src$='/images/ooorganize.svg'] {
      position: absolute;
      top: 12rem;
      right: 20rem;
      width: 40rem;
    }

    @keyframes dye {
      0% {
        mask-position: 3% -100px;
        -webkit-mask-position: 3% -100px;
      }
      100% {
        mask-position: 100% 0%;
        -webkit-mask-position: 100% 0%;
      }
    }
  `};
`

export const GradientText = styled(motion.h1).attrs({
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      duration: 1,
      delay: 0.3
    }
  }
})`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.size.xlarge};
    font-style: normal;
    width: min(52.1rem, 100%);
    word-break: break-word;
    font-weight: 700;
    line-height: normal;
    padding-top: 18rem;
    color: ${theme.palette.darkenBlue};
    background-image: linear-gradient(
      202deg,
      ${theme.palette.secondary} 0%,
      ${theme.palette.darker} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* remove gradient if it is span */
    span {
      -webkit-text-fill-color: ${theme.palette.darkenBlue};
    }
    animation: gradient 1s ease-in forwards;
    animation-delay: 0.25s;
    transition: background-image 1s ease-in-out;

    @keyframes gradient {
      100% {
        background-image: linear-gradient(
          202deg,
          ${theme.palette.green} 0%,
          ${theme.palette.secondary} 100%
        );
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      padding-right: 0.1rem;
      padding-left: 0.1rem;
      padding-top: 16rem;
    }
  `};
`

export const Btn = styled(motion.div).attrs({
  animate: {
    scale: [0, 0.9, 1],
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      duration: 1,
      delay: 1.2
    }
  }
})`
  ${({ theme }) => css`
    width: 17.9rem;
    height: 5.5rem;
    border-radius: 3rem;
    background: ${theme.palette.lightGreen};
    display: grid;
    place-items: center;
    color: ${theme.palette.green};
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  `};
`

export const HomeBrand = styled(motion.div)`
  ${() => css`
    position: absolute;
    top: 8%;
    left: 20rem;
    @media screen and (max-width: 768px) {
      margin-top: 3rem;
      left: 0;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      left: 5rem;
    }
    @media (min-width: 769px) and (max-width: 991px) {
      left: 5rem;
    }
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  `};
`

export const Resume = styled(motion.div).attrs({
  animate: {
    scale: [0, 0.9, 1],
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 12,
      duration: 1,
      delay: 1.2
    }
  }
})`
  ${({ theme }) => css`
    background-color: ${theme.palette.darker};
    width: 4rem;
    height: 40rem;
    position: absolute;
    top: 12rem;
    right: 20rem;
    @media screen and (max-width: 768px) {
      left 0;
      right: unset;
      writing-mode: unset;
      width: fit-content;
      padding: 0 2rem;
      height: 4rem;
    }

    @media (min-width: 992px)  and (max-width: 1199px) {
      right: 4.5rem;
    }
    @media (min-width: 769px)  and (max-width: 991px) {
      right: 4.5rem;
    }
    border-radius: ${theme.border.radius};
    display: grid;
    place-items: center;
    color: ${theme.palette.whiteSmoke};
    writing-mode: vertical-rl;
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.bold};
    z-index: ${theme.layers.alwaysOnTop};
    transition: background-color, width 0.3s ease-in-out;
    &:hover {
      background-color: ${theme.palette.green};
      cursor: pointer;
    }
    &:active {
      background-color: ${theme.palette.lightGreen};
    }
  `};
`

export const Text = styled(motion.p)`
  ${({ theme }) => css`
    color: ${theme.palette.whiteSmoke};
    font-size: 5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    user-select: none;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
      top: 30%;
    }

    @media screen and (max-width: 475px) {
      font-size: 2.3rem;
      top: 30%;
      left: 50%;
    }

    span {
      background-image: linear-gradient(
        202deg,
        ${theme.palette.green} 0%,
        ${theme.palette.secondary} 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &.yellow {
        background-image: unset;
        -webkit-text-fill-color: ${theme.palette.darker};
        width: 5rem;
        height: 5rem;
        background: #f9d423;
        display: inline-flex;
        justify-content: flex-end;
        line-height: 5rem;
        border-radius: 0.5rem;
      }
    }
  `};
`

export const Brazil = styled(motion.img).attrs({
  src: '/images/brazil.png',
  alt: 'Brazil'
})`
  filter: drop-shadow(5px 5px 5px #222);
  position: relative;
`

export const Pin = styled(motion.img).attrs({
  src: '/images/pin.png',
  alt: 'map marking'
})`
  filter: drop-shadow(5px 5px 5px #222);
`

export const Div = styled(motion.div)``

// projects
export const ProjectsWrapper = styled(motion.div)`
  ${({ theme }) => css`
    /* mobiel */
    width: min(50%, 100%);
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    height: 45vh;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(
      90deg,
      ${theme.palette.whiteSmoke} 0%,
      ${theme.palette.grey} 50%,
      ${theme.palette.whiteSmoke} 100%
    );
    background-size: 200% 200%;
    animation: shimmer 2s linear infinite forwards;

    @keyframes shimmer {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: -135% 0%;
      }
    }

    /* box-shadow: ${theme.shadow.box.small} ${theme.palette.darker}; */
    border-radius: ${theme.border.radius};
  `};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`

export const See = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 42rem;
    height: 8.8rem;
    flex-shrink: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 3rem 3rem 0rem 0rem;
    transform: translateX(-50%);
    background: rgba(20, 28, 34, 0.45);
    font-size: ${theme.font.size.medium};

    @media screen and (max-width: 768px) {
      width: 100%;
      border-radius: 3rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    &:hover {
      background: rgba(20, 28, 34, 0.65);
      cursor: pointer;
    }
  `};
`

export const Description = styled(motion.p)`
  ${({ theme }) => css`
    width: 65.1rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    height: 7.9rem;
    color: ${theme.palette.dark};
    text-align: center;
    font-size: ${theme.font.size.medium};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
  `};
`
