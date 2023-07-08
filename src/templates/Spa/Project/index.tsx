import * as S from './styles'
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa'

import Text from '@/components/Text'
import { Container } from '@/components/Container'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CarouselItem } from '@/templates/Admin/Contents/styles'
import responsive from '@/utils/responsiveCarousel'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/default.css'
import remarkGfm from 'remark-gfm'
import { useRouter } from 'next/router'
import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'

import type { Project } from '@/types/spa'
import Link from 'next/link'
import { Flex } from '@/components/Flex'

type ProjectProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const { readme, title, img, source, slug } = project
  const [modal, setModal] = useState('')
  const router = useRouter()

  useEffect(() => {
    // hide scrollbar when modal is open
    if (modal) {
      document.body.style.overflow = 'hidden'
      // handle arrow keys
      document.addEventListener('keydown', handleArrowKeys)

      return () => {
        document.removeEventListener('keydown', handleArrowKeys)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal])

  const handleGoBack = () => {
    if (router?.back) {
      router.back()
    } else {
      router.push('/')
    }
  }

  const EventLeft = () => {
    // check if index is not out of bounds
    const prevImg = img.indexOf(modal) - 1
    if (prevImg >= 0) setModal(img[prevImg])
    else setModal(img[img.length - 1])
  }
  const EventRight = () => {
    const nextImg = img.indexOf(modal) + 1
    if (nextImg < img.length) setModal(img[nextImg])
    else setModal(img[0])
  }

  const toImg = (rl: string) => {
    switch (rl) {
      case 'left':
        EventLeft()
        break
      case 'right':
        EventRight()
        break
      default:
        break
    }
  }

  const handleArrowKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        EventLeft()
        break
      case 'ArrowRight':
        EventRight()
        break
      case 'Escape':
        setModal('')
        break
      default:
        break
    }
  }

  const handleCloseModal = () => setModal('')

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
        <Flex justify="space-between" align="center">
          <S.A onClick={handleGoBack}>
            <Text color="green" icon={<FaArrowLeft />} size="medium" gap="1rem">
              Back
            </Text>
          </S.A>
          <Link href={source ? source : `/project/${slug}`} target="_blank">
            <Text
              color="grey"
              size="medium"
              icon={<FaGithub />}
              iconposition="right"
              gap="1rem"
            >
              Source code
            </Text>
          </Link>
        </Flex>
        <S.Content>
          <Carousel responsive={responsive}>{items}</Carousel>
          <S.Readme empty={!readme ? true : false}>{readmeContent}</S.Readme>
        </S.Content>
        {/* when clicking on a carousel image */}
        {typeof window !== 'undefined'
          ? createPortal(
              <S.AnimatedContainer>
                {modal ? (
                  <S.Portal onClick={handleCloseModal}>
                    <i>X</i>
                    <img
                      src={modal}
                      alt="Image chosen from the carousel"
                      onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                        e.stopPropagation()
                      }
                    />
                    <S.Buttons visible={img.length > 1 ? true : false}>
                      <FaArrowLeft
                        onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
                          e.stopPropagation()
                          toImg('left')
                        }}
                      />
                      <FaArrowRight
                        onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
                          e.stopPropagation()
                          toImg('right')
                        }}
                      />
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
