/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react'
import { Colors } from '@/types/colors'
import { FontSizeTypes, FontWeightTypes } from '@/types/font'

export type ButtonProps = {
  text: string
  icon?: ReactElement | null
  iconposition?: 'left' | 'right'
  bgcolor?: Colors
  color?: Colors
  fontSize?: FontSizeTypes
  fontWeight?: FontWeightTypes
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void
  type?: 'button' | 'submit' | 'reset'
  center?: boolean
  width?: string
}
