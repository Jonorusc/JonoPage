import * as S from './styles'

import { Container } from '@/components/Container'
import Text from '@/components/Text'
import { GridCenter } from '@/components/Flex'

import { Project } from '@/types/spa'

import {
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  motion
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  const router = useRouter()
  const [project, setProject] = useState(projects[0])
  const targetRef = useRef(null)
  const wheelTargetRef = useRef<HTMLDivElement | null>(null)
  // framer motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const springConfig = {
    stiffness: 400,
    damping: 90
  }

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    springConfig
  )

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [0, 1, 1, 0])

  const projectsYaxis = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [200, 80, 80, -400]),
    springConfig
  )

  const descriptionYaxis = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-100, 90]),
    springConfig
  )

  const [deltaY, setDeltaY] = useState(0)

  // go to the next or previous project
  const goToProject = (action: 'next' | 'prev') => {
    switch (action) {
      case 'next': {
        const nextIndex = projects.indexOf(project) + 1

        nextIndex < projects.length
          ? setProject(projects[nextIndex])
          : // go to the top
            setProject(projects[0])
        break
      }
      case 'prev': {
        const prevIndex = projects.indexOf(project) - 1
        prevIndex >= 0
          ? setProject(projects[prevIndex])
          : // go to the bottom
            setProject(projects[projects.length - 1])
        break
      }
      default:
        break
    }
  }
  // wheel scroll on the projects
  useEffect(() => {
    const wheelTarget = wheelTargetRef.current
    if (!wheelTarget) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      // block scroll if the user is dragging the project
      if (e.buttons === 1) return

      setDeltaY(e.deltaY)
      e.deltaY > 0
        ? // scroll down
          goToProject('next')
        : // scroll up
          goToProject('prev')
    }

    wheelTarget.addEventListener('wheel', handleWheel)

    return () => wheelTarget.removeEventListener('wheel', handleWheel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wheelTargetRef, project, projects])

  const handleSeeProject = (slug: string) => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())

    router.push(`/project/${slug}`, undefined, { shallow: true })
  }

  // scroll position
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition')

    if (scrollPosition !== null) window.scrollTo(0, parseInt(scrollPosition))
    // reset scroll position
    sessionStorage.removeItem('scrollPosition')
  }, [])

  return (
    <S.Wrapper
      ref={targetRef}
      height="110vh"
      id="projects"
      cssText='background-image: url("/images/bbblurry.svg");'
    >
      <S.Div
        style={{
          position: 'relative',
          top: '15%',
          scale,
          width: '100%',
          height: 'fit-content',
          opacity
        }}
      >
        <Container>
          <GridCenter>
            <Text size="large" color="secondary">
              Latest Projects
            </Text>
            <Text size="medium" color="darker" mt="1rem" align="center">
              Check out some projects i’ve done
            </Text>
            <Text size="small" color="darker" mt="1rem">
              Scroll/Drag down or up to see more
            </Text>
          </GridCenter>
          {/* projects */}
          {projects.length > 0 ? (
            <>
              <S.ProjectsWrapper
                ref={wheelTargetRef}
                style={{ y: projectsYaxis, opacity, scale }}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={project.slug}
                    initial={{ y: deltaY > 0 ? 40 : -40 }}
                    animate={{
                      y: 0
                      // opacity: 1
                    }}
                    transition={{
                      y: { type: 'spring', stiffness: 300, damping: 30 }
                      // opacity: { duration: 0.2 }
                    }}
                    exit={{
                      y: deltaY > 0 ? 40 : -40
                      // opacity: 0
                    }}
                    src={project.img[0]}
                    alt={project.description}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(e, { offset }) => {
                      e.preventDefault()
                      setDeltaY(offset.y)
                      if (offset.y > 100) goToProject('next')
                      else if (offset.y < -100) goToProject('prev')
                    }}
                  />
                </AnimatePresence>
                <S.See onClick={() => handleSeeProject(project.slug)}>
                  {/* <Link href={`/project/${project.slug}`}> */}
                  <FaGithub /> See Project
                  {/* </Link> */}
                </S.See>
              </S.ProjectsWrapper>
              <GridCenter>
                <S.Description style={{ y: descriptionYaxis, opacity }}>
                  {project.description}
                </S.Description>
              </GridCenter>
            </>
          ) : (
            <GridCenter>
              <Text size="medium" color="darker" mt="1rem" align="center">
                No projects yet
              </Text>
            </GridCenter>
          )}
        </Container>
      </S.Div>
    </S.Wrapper>
  )
}

export default Projects
