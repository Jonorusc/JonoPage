import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 23.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    color: ${theme.palette.secondary};
    font-size: ${theme.font.size.medium};
  `};
`
export const Input = styled.input.attrs({
  type: 'file'
})`
  border: none;
  outline: none;
  min-width: 30rem;
  height: 4rem;
  visibility: hidden;
  pointer-events: none;
  display: none;
`
export const Image = styled.img<{ position?: string }>`
  ${({ theme, position }) => css`
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    ${!!position &&
    css`
      position: ${position};
      z-index: ${theme.layers.menu}};
    `}
  `};
`

export const Images = styled.div`
  position: relative;
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
  `};
`
