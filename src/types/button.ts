import { ReactElement } from 'react'
import { Colors } from '@/types/colors'
import { FontSizeTypes, FontWeightTypes } from '@/types/font'

export type ButtonProps = {
  text: string
  icon?: ReactElement | null
  iconPosition?: 'left' | 'right'
  bgColor?: Colors
  color?: Colors
  fontSize?: FontSizeTypes
  fontWeight?: FontWeightTypes
  onClick: () => void
}
