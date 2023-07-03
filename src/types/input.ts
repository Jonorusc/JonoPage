import React from 'react'
import { FontSizeTypes } from './font'
import { Colors } from './colors'

export type EventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>
type InputValue = string | number

export type InputProps<T extends (event?: EventType) => void | null> = {
  haserror?: boolean
  isdisabled?: boolean
  placeholder?: string
  label?: string
  value?: InputValue
  type: 'text' | 'email' | 'password' | 'textarea'
  onInputChange?: T
  name: string
  fontSize?: FontSizeTypes
  required?: boolean
  labelcolor?: Colors
}
