/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, ReactNode, JSXElementConstructor } from 'react'

export type InputValue = { [key: string]: string }

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

export type FormCallBackFunction = (
  e?: React.FormEvent<HTMLFormElement>,
  formValues?: InputValue
) => void

export type FormProps = {
  onSubmit: FormCallBackFunction
  onReset?: FormCallBackFunction
  children: ChildrenProps
  resetName?: string
  submitName?: string
  inputValues?: InputValue
}
