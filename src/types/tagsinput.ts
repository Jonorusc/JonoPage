export type TagsInputProps = {
  initialTags: string[]
  onChange: (tags: string[]) => void
  setTags?: (tags: string[]) => void
  placeholder: string
  disabled?: boolean
}
