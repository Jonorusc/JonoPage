import * as S from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import Text from '@/components/Text'
import { Container } from '@/components/Container'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CarouselItem } from '@/templates/Admin/Contents/styles'
import responsive from '@/utils/responsiveCarousel'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/default.css'
import remarkGfm from 'remark-gfm'
import { useRouter } from 'next/router'
import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'

import type { Project } from '@/types/spa'

type ProjectProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const { readme, title, img } = project
  const [modal, setModal] = useState('')
  const router = useRouter()

  useEffect(() => {
    // hide scrollbar when modal is open
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modal])

  useEffect(() => {
    // handle arrow keys
    document.addEventListener('keydown', handleArrowKeys)

    return () => {
      document.removeEventListener('keydown', handleArrowKeys)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGoBack = () => {
    if (router?.back) {
      router.back()
    } else {
      router.push('/')
    }
  }

  const toImg = (rl: string): React.MouseEventHandler<SVGElement> => {
    switch (rl) {
      case 'left':
        return () =>
          handleArrowKeys(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
      case 'right':
        return () =>
          handleArrowKeys(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      default:
        return (event) => event
    }
  }

  const handleArrowKeys = (e?: KeyboardEvent) => {
    if (e) {
      switch (e.key) {
        case 'ArrowLeft': {
          // check if index is not out of bounds
          const prevImg = img.indexOf(modal) - 1
          if (prevImg >= 0) setModal(img[prevImg])
          break
        }
        case 'ArrowRight': {
          const nextImg = img.indexOf(modal) + 1
          if (nextImg < img.length) setModal(img[nextImg])
          break
        }
        case 'Escape':
          setModal('')
          break
        default:
          break
      }
    }
  }

  const items = img.map((item, index) => {
    return (
      <CarouselItem key={`${title}-${index}`} onClick={() => setModal(item)}>
        <img src={item} alt={`${title} project image [${index}]`} />
      </CarouselItem>
    )
  })

  const readmeContent = readme ? (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {readme}
    </ReactMarkdown>
  ) : (
    <Text color="green" size="large">
      No readme content
    </Text>
  )

  return (
    <S.Wrapper>
      <Container padding="4rem 8rem">
        <Link href="#">
          <S.A onClick={handleGoBack}>
            <Text color="green" icon={<FaArrowLeft />} size="medium" gap="1rem">
              Back
            </Text>
          </S.A>
        </Link>
        <S.Content>
          <Carousel responsive={responsive}>{items}</Carousel>
          <S.Readme empty={readme ? false : true}>{readmeContent}</S.Readme>
        </S.Content>
        {/* when clicking on a carousel image */}
        {typeof window !== 'undefined'
          ? createPortal(
              <S.AnimatedContainer>
                {modal ? (
                  <S.Portal>
                    <i onClick={() => setModal('')}>X</i>
                    <img src={modal} alt="Image chosen from the carousel" />
                    <S.Buttons visible={img.length > 1 ? true : false}>
                      <FaArrowLeft onClick={toImg('left')} />
                      <FaArrowRight onClick={toImg('right')} />
                    </S.Buttons>
                  </S.Portal>
                ) : null}
              </S.AnimatedContainer>,
              document.body
            )
          : null}
      </Container>
    </S.Wrapper>
  )
}

export default ProjectDetails
