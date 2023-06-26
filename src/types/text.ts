import { FontSizeTypes } from '@/types/font'
import { Colors } from './colors'
import { ReactElement } from 'react'

export type TextProps = {
  size?: FontSizeTypes
  icon?: ReactElement | null
  iconposition?: 'left' | 'right'
  color: Colors
  istitle?: boolean
  up?: boolean
  m?: string
  mt?: string
  mb?: string
  mr?: string
  ml?: string
  gap?: string
  children: string | HTMLElement
}
