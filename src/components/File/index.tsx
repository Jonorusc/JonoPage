import * as S from './styles'
import { FileProps, EventType, ImageObject } from '@/types/file'
import { useState } from 'react'

const File = <T extends (event?: EventType, images?: ImageObject[]) => void>({
  name,
  types,
  label,
  multiple = false,
  required = false,
  haserror = false,
  onInputChange,
  img = []
}: FileProps<T>) => {
  const [images, setImages] = useState<ImageObject[]>(img)

  const onInputChangeHandler = (e: EventType) => {
    const { files } = e.target as HTMLInputElement
    if (!files) return

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageURL = e.target?.result as string
        const imageObject: ImageObject = { url: imageURL, file }
        // if file is a pdf set the `/images/pdfpath` as the image url
        if (file.type === 'application/pdf')
          imageObject.url = '/images/pdf.webp' //mutate the imageObject
        // set the images state
        setImages((prevImages) => [...prevImages, imageObject])
      }
      reader.readAsDataURL(file)
    }

    !!onInputChange &&
      typeof onInputChange === 'function' &&
      images.length > 0 &&
      onInputChange(e, images)
  }

  return (
    <S.Label htmlFor={name}>
      <S.Span {...(haserror && { haserror })}>{label}</S.Span>
      <S.Images>
        <S.Image
          src="/images/add-images.svg"
          alt="A intuitive logo for adding images"
        />
        {!!images &&
          images.map((image, index) => {
            const [x, y] = [index * 5, index * 5]
            if (index > 4) return null
            return (
              <S.Image
                style={{ left: `${x}px`, top: `${y}px` }}
                key={index}
                src={image.url}
                alt="A image uploaded"
                position="absolute"
              />
            )
          })}
      </S.Images>
      <S.Input
        accept={types.join(',')}
        multiple={multiple}
        id={name}
        name={name}
        onChange={onInputChangeHandler}
        {...(required && img.length === 0 && { required })}
      />
      <S.Span>{images.length > 0 ? `${images.length} loaded` : null}</S.Span>
    </S.Label>
  )
}

export default File
