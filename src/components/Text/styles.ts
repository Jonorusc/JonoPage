import styled, { css } from 'styled-components'
import { TextProps } from '@/types/text'

type WrapperProps = Omit<TextProps, 'children' | 'icon' | 'iconPosition'>

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, size, color, isTitle, gap, uppercase, m, mt, mb, ml, mr }) => css`
    display: flex;
    align-items: center;
    column-gap: ${gap};
    font-size: ${theme.font.size.small};
    text-transform: ${uppercase ? 'uppercase' : 'auto'};
    font-weight: ${isTitle ? theme.font.bold : theme.font.normal};
    /* margins */
    ${!!m &&
    css`
      margin: ${m};
    `}

    ${!!mt &&
    css`
      margin-top: ${mt};
    `};

    ${!!mb &&
    css`
      margin-bottom: ${mb};
    `};

    ${!!ml &&
    css`
      margin-left: ${ml};
    `};

    ${!!mr &&
    css`
      margin-right: ${mr};
    `};

    /* just to guarantee in case of removing size prop from compoenent*/
    ${!!size &&
    css`
      font-size: ${theme.font.size[size]};
    `};
    ${!!color &&
    css`
      color: ${theme.palette[color]};
    `}
  `};
`

type IconProps = Pick<TextProps, 'iconPosition'>

export const Icon = styled.div<IconProps>`
  ${({ iconPosition }) => css`
    line-height: 1rem;
    order: ${iconPosition === 'left' ? 0 : 2};
    color: inherit;
  `};
`

export const Text = styled.span`
  order: 1;
`
