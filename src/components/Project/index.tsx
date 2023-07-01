import * as S from './styles'
import { Project as Props } from '@/types/spa'

import { FaRegWindowClose, FaLink } from 'react-icons/fa'

import { useState } from 'react'
import { useRouter } from 'next/router'

import Dialog from '@/components/Dialog'
import { Animate } from '@/components/Dialog/styles'

type ProjectProps = Props & {
  onExclude: (projectId: string) => void
}

const Project = ({
  title,
  description,
  img,
  slogan,
  onExclude
}: ProjectProps) => {
  const projectImage: string = img[0] // path to image
  const [exclude, setExclude] = useState(false)
  const router = useRouter()

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation()
    router.push(`/project/${slogan}`)
  }

  const handleOnYes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation()
    setExclude(false)
    onExclude && onExclude(slogan)
  }

  return (
    <Animate>
      <S.Motion>
        <S.Wrapper>
          <S.Close
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              setExclude(true)
            }}
          >
            <FaRegWindowClose />
          </S.Close>
          <img src={projectImage} alt={description} />
          <S.Title>
            {title.length > 25 ? title.substring(0, 29) + '...' : title}
          </S.Title>
          <S.Link onClick={handleOnClick}>
            <FaLink />
          </S.Link>
          <Dialog
            open={exclude}
            title="Are you sure?"
            onNo={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              event.stopPropagation()
              setExclude(false)
            }}
            onYes={handleOnYes}
          />
        </S.Wrapper>
      </S.Motion>
    </Animate>
  )
}

export default Project
