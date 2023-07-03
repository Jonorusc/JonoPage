import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${theme.spacing.small} ${theme.spacing.large};
    font-size: 1.6rem;
    background-color: ${disabled ? 'transparent' : theme.palette.lightGreen};
    border-radius: ${theme.border.radius};
    column-gap: ${theme.spacing.small};
    row-gap: ${theme.spacing.small};
    min-width: 3.15rem;
    min-height: 5rem;
    width: ${disabled ? 'fit-content' : '100%'};
    box-sizing: border-box;

    &:focus-within {
      outline: 0.1rem dashed ${theme.palette.darkenBlue};
    }
  `};
`

export const Tag = styled.div<{ link: boolean }>`
  ${({ theme, link }) => css`
    color: ${theme.palette.darkenBlue};
    letter-spacing: 0.08rem;
    font-weight: 500;
    display: flex;
    height: 3rem;
    align-items: center;
    cursor: ${link ? 'pointer' : 'default'};
    column-gap: 0.6rem;
    background-color: ${theme.palette.primary};
    padding: ${theme.spacing.small};
    border-radius: ${theme.border.radius};

    span {
      line-height: 1rem;
    }

    div {
      background-color: ${theme.palette.secondary};
      border: none;
      outline: none;
      cursor: pointer;
      color: ${theme.palette.primary};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: grid;
      font-size: 1rem;
      place-items: center;
      font-weight: bold;
    }
  `};
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    flex-grow: 1;
    background-color: transparent;
    color: ${theme.palette.darkenBlue};
    font-family: 'K2D', sans-serif;
    font-size: ${theme.font.size.medium};

    &::placeholder {
      color: ${theme.palette.grey};
    }
  `};
`
