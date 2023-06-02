import React, { useState } from 'react'
import { TagsInputProps } from '@/types/tagsinput'
import verifyTagLink from '@/utils/verifyTagLink'

import * as S from './styles'

// icons
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaWindowClose
} from 'react-icons/fa'

const TagsInput = <T extends (tags: string[]) => void>({
  initialTags,
  onChange,
  placeholder,
  disabled = false
}: TagsInputProps<T>) => {
  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState<string[]>(initialTags)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (!inputValue || inputValue.length < 2) return

      let newTags = [...tags]
      // if the input has ',' in order to separate tags - split it and add each tag
      if (inputValue.includes(',')) {
        newTags = [
          ...tags,
          ...inputValue.split(',').map((tag) => tag.replace(/\s+/g, ' '))
        ]
      } else {
        newTags = [...tags, inputValue.replace(/\s+/g, ' ')]
      }
      setTags(newTags)
      // callback - onChange function
      onChange(newTags)
      setInputValue('')
    }
  }

  const handleTagRemove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tag: string
  ) => {
    e.stopPropagation()
    const newTags = tags.filter((t) => t !== tag)
    setTags(newTags)
    onChange(newTags)
  }

  const icons = {
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
    github: <FaGithub />,
    facebook: <FaFacebook />
  }

  return (
    <S.Wrapper disabled={disabled}>
      {tags.map((tag, index) => {
        const [icon, text, link] = verifyTagLink(icons, tag)

        return (
          <S.Tag
            key={index}
            link={link ? true : false}
            onClick={() => {
              link ? window.open(link, '_blank') : null
            }}
          >
            {icon ? icon : null}
            <span>{text}</span>
            {disabled ? null : (
              <div onClick={(e) => handleTagRemove(e, tag)}>
                <FaWindowClose />
              </div>
            )}
          </S.Tag>
        )
      })}
      {!disabled ? (
        <S.Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          placeholder={placeholder}
        />
      ) : null}
    </S.Wrapper>
  )
}

export default TagsInput
