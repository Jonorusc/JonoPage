import { InputProps, EventType } from '@/types/input'
import * as S from './styles'

import { useState, useRef } from 'react'

const Input = <T extends (event?: EventType) => void>({
  hasError = false,
  isDisabled = false,
  placeholder = '',
  value = '',
  type = 'text',
  onInputChange,
  name,
  fontSize = 'medium'
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
    !!onInputChange && onInputChange(e)
  }

  if (type === 'textarea') {
    return (
      <S.Textarea
        ref={textAreaRef}
        id={name}
        hasError={hasError}
        disabled={isDisabled}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        {...(fontSize && { fontSize })}
      />
    )
  }
  return (
    <S.Input
      id={name}
      hasError={hasError}
      disabled={isDisabled}
      placeholder={placeholder}
      value={inputValue}
      type={type}
      {...(fontSize && { fontSize })}
      onChange={handleInputChange}
    />
  )
}

export default Input
