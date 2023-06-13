/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react'
import { FormProps, ChildrenProps, InputValue } from '@/types/form'
import { InputProps } from '@/types/input'
import * as S from './styles'
import Button from '@/components/Button'

const Form = ({
  onSubmit,
  onReset,
  children,
  resetName = 'Reset',
  submitName = 'Submit'
}: FormProps) => {
  const onResetAvailable = !!onReset && typeof onReset === 'function'
  const formRef = useRef<HTMLFormElement>(null)
  const [formValues, setFormValues] = useState<InputValue>({})

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formRef.current) {
      const childType = ['text', 'textarea', 'password', 'email']

      const InputComponentsName = (children: ChildrenProps): string[] => {
        const names: string[] = []

        React.Children.forEach(children, (child) => {
          if (
            React.isValidElement<InputProps<any>>(child) &&
            childType.includes(child.props.type)
          ) {
            names.push(child.props.name)
          } else if (
            React.isValidElement(child) &&
            React.Children.count(child.props.children) > 0
          ) {
            const updatedChildren = InputComponentsName(child.props.children)
            names.push(...updatedChildren)
          }
        })

        return names
      }

      const inputNames = InputComponentsName(children)
      const elements = formRef.current.elements as HTMLFormControlsCollection

      const dataObject = Array.from(elements).reduce(
        (acc: InputValue, element: any) => {
          if (inputNames.includes(element.id)) {
            acc[element.id] = element.value
          }
          return acc
        },
        {}
      )
      setFormValues(dataObject)
      onSubmit(event, dataObject)
    }
  }

  const handleFormReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // sets the form values to empty strings
    const emptyFormValues = Object.keys(formValues).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {}
    )
    setFormValues(emptyFormValues)
    // reset form
    if (formRef.current) {
      const elements = formRef.current.elements as HTMLFormControlsCollection
      Array.from(elements).forEach((element: any) => (element.value = ''))
    }

    if (onResetAvailable) {
      onReset(event, emptyFormValues)
    }
  }

  return (
    <S.Form ref={formRef} onReset={handleFormReset} onSubmit={handleFormSubmit}>
      {children}
      <S.FormButtons>
        {onResetAvailable ? <Button type="reset" text={resetName} /> : null}
        <Button type="submit" text={submitName} />
      </S.FormButtons>
    </S.Form>
  )
}

export default Form
