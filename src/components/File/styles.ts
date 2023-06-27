import styled, { css } from 'styled-components'

export const Label = styled.label.attrs({
  tabIndex: 0
})`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 23.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    color: ${theme.palette.secondary};
    font-size: ${theme.font.size.medium};
    padding: 0.3rem 0;
    box-sizing: border-box;

    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 0.1rem dashed ${theme.palette.darkenBlue};
    }
    border-radius: ${theme.border.radius};
  `};
`
export const Input = styled.input.attrs({
  type: 'file',
  tabIndex: 0
})`
  border: none;
  outline: none;
  min-width: 30rem;
  visibility: hidden;
  pointer-events: none;
  display: none;
  height: 0;
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

export const Span = styled.span<{ haserror?: boolean }>`
  ${({ theme, haserror }) => css`
    color: ${haserror ? theme.palette.error : theme.palette.secondary};
    font-size: ${theme.font.size.small};
  `};
`
