/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { FormProps, InputValue } from '@/types/form'
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
    const childType = ['text', 'textarea', 'password', 'email', 'file']

    const formRef = event.currentTarget as HTMLFormElement
    const elements = formRef.elements as HTMLFormControlsCollection

    const dataObject = Array.from(elements).reduce(
      (acc: InputValue, element: any) => {
        const { id, type, value, files } = element
        if (childType.includes(type)) acc[id] = type === 'file' ? files : value
        return acc
      },
      {}
    )
    setFormValues(dataObject)

    const errorObject = Array.from(elements).reduce(
      (acc: InputValue, element: any) => {
        const { id, required, value, files, type } = element
        if (
          (required && !value) ||
          (required && type === 'file' && files.length === 0)
        )
          acc[id] = 'This field is required'
        return acc
      },
      {}
    )

    if (Object.values(errorObject).some((error) => error)) {
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
