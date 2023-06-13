/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, ReactNode, JSXElementConstructor } from 'react'

export type ChildrenProps =
  | ReactElement<any, string | JSXElementConstructor<any>>
  | React.ReactElement<any, string | JSXElementConstructor<any>>[]
  | ReactNode
  | ReactNode[]
  | null
  | undefined
  | string
  | number
  | boolean

export type FormProps = {
  onSubmit: (
    e?: React.FormEvent<HTMLFormElement>,
    formValues?: { [key: string]: string }
  ) => void
  onReset?: (
    e?: React.FormEvent<HTMLFormElement>,
    formValues?: { [key: string]: string }
  ) => void
  children: ChildrenProps
  resetName?: string
  submitName?: string
  inputValues?: { [key: string]: string }
}
