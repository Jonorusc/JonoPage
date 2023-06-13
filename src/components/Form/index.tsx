/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { FormProps, ChildrenProps, InputValue } from '@/types/form'
import { InputProps, EventType } from '@/types/input'
import * as S from './styles'
import Button from '@/components/Button'

const Form = ({
  onSubmit,
  onReset,
  children,
  resetName = 'Reset',
  submitName = 'Submit',
  inputValues = {}
}: FormProps) => {
  const onResetAvailable = !!onReset && typeof onReset === 'function'
  const [formValues, setFormValues] = useState<InputValue>(inputValues)

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleFormSubmit = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault()
    onSubmit(event, formValues)
  }

  const handleFormReset = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault()
    // sets the form values to empty strings
    const emptyFormValues = Object.keys(formValues).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {}
    )
    setFormValues(emptyFormValues)
    console.log(formValues)
    if (onResetAvailable) {
      onReset(event, emptyFormValues)
    }
  }

  const scrapeInputComponents = (
    child: React.ReactElement<InputProps<any>>
  ) => {
    const { name } = child.props
    return React.cloneElement(child, {
      key: name,
      value: formValues[name] || '',
      onInputChange: (event: EventType) =>
        handleInputChange(name, event.target.value)
    })
  }

  const elements = (children: ChildrenProps): React.ReactNode => {
    return React.Children.map(children, (child) => {
      const childType = ['text', 'textarea', 'password', 'email']
      if (
        React.isValidElement<InputProps<any>>(child) &&
        childType.includes(child.props.type)
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
    <S.Form>
      {elements(children)}
      <S.FormButtons>
        {onResetAvailable ? (
          <Button onClick={handleFormReset} text={resetName} />
        ) : null}
        <Button onClick={handleFormSubmit} text={submitName} />
      </S.FormButtons>
    </S.Form>
  )
}

export default Form
