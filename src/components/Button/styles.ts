import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '@/types/button'
import { Colors } from '@/types/colors'
import { FontSizeTypes, FontWeightTypes } from '@/types/font'

type WrapperProps = Pick<
  ButtonProps,
  'bgcolor' | 'color' | 'fontSize' | 'fontWeight' | 'icon' | 'center' | 'width'
>

const wrapperModifiers = {
  bgcolor: (theme: DefaultTheme, bgcolor: Colors) => css`
    background-color: ${theme.palette[bgcolor]};
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
  ${({
    theme,
    bgcolor,
    color,
    fontSize,
    fontWeight,
    icon,
    center,
    width
  }) => css`
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${icon ? theme.spacing.small : theme.spacing.medium}
      ${theme.spacing.medium};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    ${!!bgcolor && wrapperModifiers.bgcolor(theme, bgcolor)};
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!fontSize && wrapperModifiers.fontSize(theme, fontSize)};
    ${!!fontWeight && wrapperModifiers.fontWeight(theme, fontWeight)};

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5rem;
    width: ${width || '100%'};

    ${center &&
    css`
      justify-content: center;
      column-gap: 0;
    `};

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: 0.1rem dashed ${theme.palette.darkenBlue};
    }
  `};
`

type IconProps = Pick<ButtonProps, 'iconposition'>

export const Icon = styled.div<IconProps>`
  ${({ iconposition }) => css`
    margin-right: ${iconposition === 'right' ? '0' : '0.5rem'};
    margin-left: ${iconposition === 'right' ? '0.5rem' : '0'};
    order: ${iconposition === 'right' ? '2' : '1'};
    display: grid;
    place-items: center;
  `};
`

export const Text = styled.span<IconProps>`
  ${({ iconposition }) => css`
    margin-right: ${iconposition === 'right' ? '0.5rem' : '0'};
    margin-left: ${iconposition === 'right' ? '0' : '0.5rem'};
    order: ${iconposition === 'right' ? '1' : '2'};
    line-height: 1rem;
  `};
`
