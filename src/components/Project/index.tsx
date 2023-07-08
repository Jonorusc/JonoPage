import * as S from './styles'
import { Project as Props } from '@/types/spa'

import { FaRegWindowClose, FaLink } from 'react-icons/fa'

import { useState } from 'react'
import Link from 'next/link'

import Dialog from '@/components/Dialog'
import { Animate } from '@/components/Dialog/styles'

type ProjectProps = Props & {
  onExclude: (projectId: string) => void
}

const Project = ({
  title,
  description,
  img,
  slug,
  onExclude
}: ProjectProps) => {
  const projectImage: string = img[0] // path to image
  const [exclude, setExclude] = useState(false)

  const handleOnYes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation()
    setExclude(false)
    onExclude && onExclude(slug)
  }

  return (
    <Animate>
      <S.Motion>
        <S.Wrapper>
          <S.Close
            key={slug}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          <Link href={`/project/${slug}`} passHref>
            <FaLink />
          </Link>
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
