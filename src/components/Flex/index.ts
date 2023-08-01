import styled, { css } from 'styled-components'

export type FlexProps = {
  gap?: string
  m?: string
  cssText?: string
  justify?: string
  align?: string
}

export const FlexColumn = styled.div<FlexProps>`
  ${({ gap, m, cssText, align, justify }) => css`
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

    ${!!cssText &&
    css`
      ${cssText}
    `}

    ${!!align &&
    css`
      align-items: ${align};
    `}

    ${!!justify &&
    css`
      justify-content: ${justify};
    `}
  `};
`

export const Flex = styled.div<FlexProps>`
  ${({ gap, m, justify, align, cssText }) => css`
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

    ${!!cssText &&
    css`
      ${cssText}
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
