import styled, { css } from 'styled-components'
import { InputProps, EventType } from '@/types/input'

type PropsType = Pick<
  InputProps<(event?: EventType) => void>,
  'haserror' | 'fontSize'
>

const inputBaseStyles = css`
  ${({ theme }) => css`
    /* Styles for InputBase */
    border: none;
    outline: none;
    min-width: 30rem;
    height: 4.5rem;
    color: ${theme.palette.darkenBlue};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
    box-sizing: border-box;
    &:focus {
      outline: 0.1rem dashed ${theme.palette.darkenBlue};
    }
  `};
`

export const Input = styled.input<PropsType>`
  ${({ theme, haserror, fontSize }) => css`
    background-color: ${haserror
      ? theme.palette.error
      : theme.palette.lightGreen};

    font-size: ${theme.font.size[fontSize!]};
    line-height: 1rem;

    ${inputBaseStyles}

    &::placeholder {
      color: ${haserror ? theme.palette.darkenBlue : theme.palette.darkenBlue};
    }
  `};
`

export const Textarea = styled.textarea<PropsType>`
  ${({ theme, haserror, fontSize }) => css`
    font-size: ${theme.font.size[fontSize!]};

    ${inputBaseStyles}
    resize: none;
    min-width: 30rem;
    max-width: 40rem;
    min-height: 8rem;
    max-height: 17.5rem;
    border-radius: ${theme.border.radius};
    background-color: ${haserror
      ? theme.palette.error
      : theme.palette.lightGreen};

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.palette.grey};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.palette.darkenBlue};
    }

    /* &::-webkit-scrollbar-thumb:hover {
      background: ${theme.palette.darkenBlue};
    } */

    &::placeholder {
      color: ${haserror ? theme.palette.darkenBlue : theme.palette.darkenBlue};
    }
  `};
`
