import styled, { css } from 'styled-components'

export const FlexColumn = styled.div<{ gap?: string }>`
  ${({ gap }) => css`
    display: flex;
    flex-direction: column;
    ${!!gap &&
    css`
      gap: ${gap};
    `}
  `};
`

export const Flex = styled.div<{ gap?: string }>`
  ${({ gap }) => css`
    display: flex;
    ${!!gap &&
    css`
      gap: ${gap};
    `}
  `};
`

export const GridCenter = styled.div`
  display: grid;
  place-items: center;
`
