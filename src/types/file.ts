export type EventType = React.ChangeEvent<HTMLInputElement>

export type FileProps<
  T extends (event?: EventType, images?: File[] | File) => void
> = {
  name: string
  types: string[]
  label: string
  multiple?: boolean
  onInputChange?: T
}

export type ImageObject = {
  url: string
  file: File
}