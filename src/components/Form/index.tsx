/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { FormProps, ChildrenProps, InputValue } from '@/types/form'
import { InputProps } from '@/types/input'
import { FileProps } from '@/types/file'
import * as S from './styles'
import Button from '@/components/Button'

const Form = ({
  onSubmit,
  onReset,
  onError,
  children,
  resetName = 'Reset',
  submitName = 'Submit'
}: FormProps) => {
  const onResetAvailable = !!onReset && typeof onReset === 'function'
  const onErrorAvailable = !!onError && typeof onError === 'function'
  const [formValues, setFormValues] = useState<InputValue>({})

  // handle the form invalid event
  const handleFormError = (errors: InputValue) => {
    if (onErrorAvailable) {
      onError(errors)
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const childType = ['text', 'textarea', 'password', 'email']

    const InputComponentsName = (children: ChildrenProps): string[] => {
      const names: string[] = []

      React.Children.forEach(children, (child) => {
        if (
          (React.isValidElement<InputProps<any>>(child) &&
            childType.includes(child.props.type)) ||
          (React.isValidElement<FileProps<any>>(child) && child.props.name)
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
    const formRef = event.currentTarget as HTMLFormElement
    const elements = formRef.elements as HTMLFormControlsCollection

    const dataObject = Array.from(elements).reduce(
      (acc: InputValue, element: any) => {
        if (inputNames.includes(element.id)) {
          if (element.type === 'file') acc[element.id] = element.files
          else acc[element.id] = element.value
        }
        return acc
      },
      {}
    )
    setFormValues(dataObject)

    // check if there is any error (required fields)
    const errorObject = Array.from(elements).reduce(
      (acc: InputValue, element: any) => {
        if (
          (element.required && !element.value) ||
          (element.requerid && element.files.length === 0)
        ) {
          acc[element.id] = 'This field is required'
        }
        return acc
      },
      {}
    )

    if (Object.keys(errorObject).length > 0) {
      handleFormError(errorObject)
      return
    }

    handleFormError({})
    onSubmit(event, dataObject)
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
    const formRef = event.currentTarget as HTMLFormElement
    const elements = formRef.elements as HTMLFormControlsCollection
    Array.from(elements).forEach((element: any) => (element.value = ''))
    console.log(elements)
    formRef.reset()

    if (onResetAvailable) {
      onReset(event, emptyFormValues)
    }
  }

  return (
    <S.Form onReset={handleFormReset} onSubmit={handleFormSubmit} noValidate>
      {children}
      <S.FormButtons>
        {onResetAvailable ? <Button type="reset" text={resetName} /> : null}
        <Button type="submit" text={submitName} bgcolor="secondary" />
      </S.FormButtons>
    </S.Form>
  )
}

export default Form
