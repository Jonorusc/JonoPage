import styled, { css } from 'styled-components'

export const Container = styled.div<{ padding?: string }>`
  ${({ theme, padding }) => css`
    width: 100%;
    max-width: ${theme.containerMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacing.large};
    padding-right: ${theme.spacing.large};
    ${!!padding && `padding: ${padding};`}
  `}
`
