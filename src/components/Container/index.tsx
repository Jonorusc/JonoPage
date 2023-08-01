import styled, { css } from 'styled-components'

export const Container = styled.div<{ padding?: string; margin?: string }>`
  ${({ theme, padding, margin }) => css`
    width: 100%;
    max-width: ${theme.containerMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacing.large};
    padding-right: ${theme.spacing.large};
    ${!!padding && `padding: ${padding};`}
    ${!!margin && `margin: ${margin};`}
  `}
`
