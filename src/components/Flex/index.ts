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

export const Flex = styled.div<{
  gap?: string
  m?: string
  justify?: string
  align?: string
}>`
  ${({ gap, m, justify, align }) => css`
    display: flex;

    ${!!align &&
    css`
      align-items: ${align};
    `}

    ${!!justify &&
    css`
      justify-content: ${justify};
    `}

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

export const GridCenter = styled.div<{ height?: string }>`
  ${({ height }) => css`
    display: grid;
    place-items: center;

    ${!!height &&
    css`
      height: ${height};
    `}
  `};
`
