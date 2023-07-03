export type EventType = React.ChangeEvent<HTMLInputElement>

export type FileProps<
  T extends (event?: EventType, images?: ImageObject[]) => void
> = {
  name: string
  types: string[]
  img?: ImageObject[]
  label: string
  multiple?: boolean
  onInputChange?: T
  required?: boolean
  haserror?: boolean
}

export type ImageObject = {
  url: string
  file?: File
}
