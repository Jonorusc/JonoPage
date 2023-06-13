import React from 'react'
import { FontSizeTypes } from './font'

export type EventType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>
type InputValue = string | number

export type InputProps<T extends (event?: EventType) => void | null> = {
  hasError?: boolean
  isDisabled?: boolean
  placeholder?: string
  value?: InputValue
  type: 'text' | 'email' | 'password' | 'textarea'
  onInputChange?: T
  name: string
  fontSize: FontSizeTypes
}
