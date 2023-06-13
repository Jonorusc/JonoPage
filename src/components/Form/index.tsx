/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { FormProps, ChildrenProps } from '@/types/form'
import { InputProps, EventType } from '@/types/input'
import * as S from './styles'
// button
import Button from '@/components/Button'

const Form = ({
  onSubmit,
  onReset,
  children,
  resetName = 'Reset',
  submitName = 'Submit'
}: FormProps) => {
  const onResetAvailable = !!onReset && typeof onReset === 'function'
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({})

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event, formValues)
  }

  const handleFormReset = (event: React.FormEvent<HTMLFormElement>) => {
    setFormValues({})
    if (onResetAvailable) {
      onSubmit(event, formValues)
    }
  }

  const scrapeInputComponents = (
    child: React.ReactElement<InputProps<any>>
  ) => {
    const { name } = child.props
    return React.cloneElement(child, {
      value: formValues[name] || '',
      onInputChange: (event: EventType) =>
        handleInputChange(name, event.target.value)
    })
  }

  const elements = (children: ChildrenProps): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (
        React.isValidElement<InputProps<any>>(child) &&
        (child.props.type === 'text' ||
          child.props.type === 'textarea' ||
          child.props.type === 'password' ||
          child.props.type === 'email')
      ) {
        return scrapeInputComponents(child)
      } else if (
        /* 
          Check if the element has children and if the children are of type Input
          All this is for the purpose of controlling the state of the input components
          so if you add any element and one is of type Input (more especifically Input component InputProps), it will be controlled
        */
        React.isValidElement(child) &&
        React.Children.count(child.props.children) > 0
      ) {
        const updatedChildren = elements(child.props.children)
        return React.cloneElement(child, child.props, updatedChildren)
      } else {
        return child
      }
    })
  }

  return (
    <S.Form onSubmit={handleFormSubmit} onReset={handleFormReset}>
      {elements(children)}
      <S.FormButtons>
        {onResetAvailable ? <Button type="reset" text={resetName} /> : null}
        <Button type="submit" text={submitName} />
      </S.FormButtons>
    </S.Form>
  )
}

export default Form
