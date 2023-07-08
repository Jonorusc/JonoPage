import styled, { css } from 'styled-components'
import { CarouselItem } from '@/templates/Admin/Contents/styles'
import { motion, AnimatePresence } from 'framer-motion'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.palette.darker};
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;

    a {
      text-decoration: none;
    }
  `};
`

export const Content = styled.section`
  ${({ theme }) => css`
    margin-top: 4rem;
    .react-multi-carousel-list {
      padding: ${theme.spacing.medium};
    }

    ${CarouselItem} {
      width: min(34rem, 100%);
      height: 23.5rem;
      border-radius: ${theme.border.radius};
      box-shadow: ${theme.shadow.box.small} ${theme.palette.green};
      cursor: pointer;

      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      background-size: 80rem 14rem;
      animation: placeholderShimmer 1s linear infinite forwards;

      @keyframes placeholderShimmer {
        0% {
          background-position: -40rem 0;
        }

        100% {
          background-position: 40rem 0;
        }
      }

      img {
        width: 100%;
        height: inherit;
        border-radius: inherit;
        object-fit: cover;
        user-select: none;
        -webkit-user-drag: none;
      }
    }
  `};
`

export const A = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`

export const Readme = styled.div.attrs({
  className: 'markdown-body'
})<{ empty: boolean }>`
  ${({ theme, empty }) => css`
    width: 100%;
    height: fit-content;
    margin-top: 5rem;
    font-size: ${theme.font.size.medium};
    color: ${theme.palette.whiteSmoke};
    padding: ${theme.spacing.medium};
    display: flex;
    flex-direction: column;
    column-gap: ${theme.spacing.medium};

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2.4rem;
      margin-bottom: 1.6rem;
      font-weight: ${theme.font.semiBold};
      line-height: 1.25;
      padding-bottom: 0.3em;
    }

    h1 tt,
    h1 code,
    h2 tt,
    h2 code,
    h3 tt,
    h3 code,
    h4 tt,
    h4 code,
    h5 tt,
    h5 code,
    h6 tt,
    h6 code {
      padding: 0 0.2em;
      font-size: inherit;
    }

    code,
    tt {
      padding: 0.2em 0.4em;
      margin: 0;
      white-space: break-spaces;
      background-color: #343942;
      border-radius: 0.6rem;
    }

    a {
      background-color: transparent;
      color: ${theme.palette.green};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table,
    pre,
    details {
      margin-top: 0;
      margin-bottom: 1.6rem;
    }

    .highlight pre,
    pre {
      padding: 1.6rem;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #a9b1d6;
      border-radius: 0.6rem;
      font-weight: ${theme.font.bold};

      /* my theme */
      /* .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #a9b1d6;
        background: #1a1b26;
      }

      .hljs-tag,
      .hljs-name,
      .hljs-selector-tag,
      .hljs-regexp,
      .hljs-literal,
      .hljs-symbol,
      .hljs-bullet,
      .hljs-link {
        color: #c792ea;
      }

      .hljs-deletion,
      .hljs-string,
      .hljs-template-tag,
      .hljs-template-variable,
      .hljs-addition {
        color: #82aaff;
      }

      .hljs-comment,
      .hljs-quote,
      .hljs-meta {
        color: #637777;
        font-style: italic;
      }

      .hljs-keyword,
      .hljs-selector-tag,
      .hljs-built_in,
      .hljs-doctag {
        color: #ffcb6b;
      }

      .hljs-number,
      .hljs-regexp,
      .hljs-variable {
        color: #f78c6c;
      }

      .hljs-function-name,
      .hljs-attr,
      .hljs-attribute,
      .hljs-class .hljs-title,
      .hljs-section {
        color: #ff5370;
      }

      .hljs-type,
      .hljs-string,
      .hljs-symbol,
      .hljs-bullet {
        color: #c3e88d;
      }

      .hljs-title,
      .hljs-id,
      .hljs-meta-keyword,
      .hljs-selector-id {
        color: #82aaff;
        font-weight: bold;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: bold;
      } */

      /* GPT-3 Theme */
      .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #282c34;
      }

      .hljs-comment,
      .hljs-quote {
        color: #5c6370;
        font-style: italic;
      }

      .hljs-keyword,
      .hljs-selector-tag,
      .hljs-addition,
      .hljs-variable {
        color: #e06c75;
      }

      .hljs-selector-id,
      .hljs-attribute,
      .hljs-attr,
      .hljs-class .hljs-title,
      .hljs-template-variable,
      .hljs-type,
      .hljs-string,
      .hljs-number,
      .hljs-regexp,
      .hljs-link {
        color: #98c379;
      }

      .hljs-symbol,
      .hljs-bullet,
      .hljs-subst,
      .hljs-meta,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-doctag,
      .hljs-tag {
        color: #61afef;
      }

      .hljs-title,
      .hljs-params {
        color: #d19a66;
      }

      .hljs-function .hljs-title,
      .hljs-literal {
        color: #56b6c2;
      }

      .hljs-section,
      .hljs-selector-class {
        color: #c678dd;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: bold;
      }

      // optional style overrides
      .hljs-tag,
      .hljs-name,
      .hljs-selector-tag,
      .hljs-regexp,
      .hljs-literal,
      .hljs-symbol,
      .hljs-bullet,
      .hljs-link {
        color: #c792ea;
      }
    }

    pre {
      margin-top: 0;
      margin-bottom: 0;
      font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
        Liberation Mono, monospace;
      font-size: 1.2erm;
      word-wrap: normal;
    }

    ${empty &&
    css`
      height: 40rem;
      display: grid;
      place-items: center;
    `}
  `};
`

export const AnimatedContainer = styled(AnimatePresence)``

export const Portal = styled(motion.button).attrs({
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 110,
      duration: 0.4,
      delay: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: [4, -10],
    transition: {
      duration: 0.4,
      delay: 0.3
    }
  }
})`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.modal};
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);
    outline: none;
    border: none;

    i {
      position: absolute;
      top: 2rem;
      left: 3rem;
      cursor: pointer;
      color: ${theme.palette.whiteSmoke};
      text-transform: uppercases;
      font-style: normal;
      font-size: ${theme.font.size.medium};
    }

    img {
      width: min(80rem, 100%);
      max-height: 99vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: contain;
      transition: all 0.3s ease-in-out;
      user-select: none;
      user-drag: none;
    }
  `};
`

export const Buttons = styled.div<{ visible: boolean }>`
  ${({ theme, visible }) => css`
    width: 100%;
    padding: ${theme.spacing.medium};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 5rem;
    display: ${visible ? 'flex' : 'none'};
    justify-content: space-between;
    color: ${theme.palette.whiteSmoke};
    font-size: ${theme.font.size.large};
    align-items: center;

    svg {
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: ${theme.palette.primary};
        transform: scale(1.4);
      }
    }
  `};
`
