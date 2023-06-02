import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '@/types/button'
import { Colors } from '@/types/colors'
import { FontSizeTypes, FontWeightTypes } from '@/types/font'

type WrapperProps = Pick<
  ButtonProps,
  'bgColor' | 'color' | 'fontSize' | 'fontWeight' | 'icon'
>

const wrapperModifiers = {
  bgColor: (theme: DefaultTheme, bgColor: Colors) => css`
    background-color: ${theme.palette[bgColor]};
  `,
  color: (theme: DefaultTheme, color: Colors) => css`
    color: ${theme.palette[color]};
  `,
  fontSize: (theme: DefaultTheme, fontSize: FontSizeTypes) => css`
    font-size: ${theme.font.size[fontSize]};
  `,
  fontWeight: (theme: DefaultTheme, fontWeight: FontWeightTypes) => css`
    font-weight: ${theme.font[fontWeight]};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, bgColor, color, fontSize, fontWeight, icon }) => css`
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${icon ? theme.spacing.small : theme.spacing.medium}
      ${theme.spacing.medium};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    ${!!bgColor && wrapperModifiers.bgColor(theme, bgColor)};
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!fontSize && wrapperModifiers.fontSize(theme, fontSize)};
    ${!!fontWeight && wrapperModifiers.fontWeight(theme, fontWeight)};

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5rem;

    &:hover {
      opacity: 0.8;
    }
  `};
`

type IconProps = Pick<ButtonProps, 'iconPosition'>

export const Icon = styled.div<IconProps>`
  ${({ iconPosition }) => css`
    margin-right: ${iconPosition === 'right' ? '0' : '0.5rem'};
    margin-left: ${iconPosition === 'right' ? '0.5rem' : '0'};
    order: ${iconPosition === 'right' ? '2' : '1'};
    display: grid;
    place-items: center;
  `};
`

export const Text = styled.span<IconProps>`
  ${({ iconPosition }) => css`
    margin-right: ${iconPosition === 'right' ? '0.5rem' : '0'};
    margin-left: ${iconPosition === 'right' ? '0' : '0.5rem'};
    order: ${iconPosition === 'right' ? '1' : '2'};
    line-height: 1rem;
  `};
`
