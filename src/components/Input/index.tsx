import { InputProps, EventType } from '@/types/input'
import * as S from './styles'

import React, { useState, useRef } from 'react'

const Input = React.memo(
  <T extends (event?: EventType) => void>({
    haserror = false,
    isdisabled = false,
    placeholder = '',
    value = '',
    type = 'text',
    onInputChange,
    name,
    fontSize = 'medium',
    required = false,
    label = '',
    labelcolor = 'darkenBlue'
  }: InputProps<T>) => {
    const [inputValue, setInputValue] = useState(value)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleInputChange = (e: EventType) => {
      const newValue = e.currentTarget.value
      setInputValue(newValue)
      if (type === 'textarea') {
        const target = e.target as HTMLTextAreaElement
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
      }

      !!onInputChange && typeof onInputChange === 'function' && onInputChange(e)
    }

    if (type === 'textarea') {
      return (
        <S.Textarea
          ref={textAreaRef}
          id={name}
          name={name}
          disabled={isdisabled}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          {...(haserror && { haserror })}
          {...(!!fontSize && { fontSize })}
          {...(required && { required })}
        />
      )
    }
    return (
      <S.Label htmlFor={name}>
        {label ? <S.Span labelcolor={labelcolor}>{label}</S.Span> : null}
        <S.Input
          id={name}
          name={name}
          haserror={haserror ? haserror : undefined}
          disabled={isdisabled}
          placeholder={placeholder || 'Enter your text here'}
          value={inputValue}
          type={type}
          {...(!!fontSize && { fontSize })}
          {...(haserror && { haserror })}
          {...(required && { required })}
          onChange={handleInputChange}
        />
      </S.Label>
    )
  }
)

Input.displayName = 'Input'

export default Input
