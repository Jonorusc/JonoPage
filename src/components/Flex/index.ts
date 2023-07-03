import styled, { css } from 'styled-components'

export const FlexColumn = styled.div<{ gap?: string; m?: string }>`
  ${({ gap, m }) => css`
    display: flex;
    flex-direction: column;

    ${!!m &&
    css`
      margin: ${m};
    `}

    ${!!gap &&
    css`
      gap: ${gap};
    `}
  `};
`

export const Flex = styled.div<{ gap?: string; m?: string }>`
  ${({ gap, m }) => css`
    display: flex;

    ${!!m &&
    css`
      margin: ${m};
    `}

    ${!!gap &&
    css`
      gap: ${gap};
    `}

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `};
`

export const GridCenter = styled.div`
  display: grid;
  place-items: center;
`
