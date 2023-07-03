export type TagsInputProps<T extends (tags: string[]) => void> = {
  initialTags: string[]
  onChange?: T
  setTags?: (tags: string[]) => void
  placeholder: string
  disabled?: boolean
  name: string
  required?: boolean
}
