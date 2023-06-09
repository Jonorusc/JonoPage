import * as S from './styles'

import Text from '@/components/Text'
import Project from '@/components/Project'
import Button from '@/components/Button'
import Notify from '@/components/Notify'
import Loader from '@/components/Loader'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import responsive from '@/utils/responsiveCarousel'
import { useRouter } from 'next/router'
import { excludeProject } from '@/firebase/helpers'
import { useState, Fragment } from 'react'

import { Project as ProjectProps } from '@/types/spa'
import { FaFile } from 'react-icons/fa'

type ProjectsContentsProps = {
  projects: ProjectProps[]
}

const ProjectsContents = ({ projects }: ProjectsContentsProps) => {
  const [data, setData] = useState<ProjectProps[]>(projects)
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })
  const [loader, setLoader] = useState({ message: '', visible: false })
  const router = useRouter()

  const handleProjectExclude = (projectId: string) => {
    const exclude = excludeProject(projectId)

    exclude.on('deleting', (message) => {
      handleEvents('deleting', message, false)
    })

    exclude.on('deletesuccess', (message) => {
      handleEvents('deletesuccess', message, false)
      //remove the project from the list
      setTimeout(() => {
        const newData = data.filter((project) => project.slug !== projectId)
        setData(newData)
      }, 1500)
    })

    exclude.on('deleteerror', (message) => {
      handleEvents('deleteerror', message, false)
    })

    const handleEvents = (type: string, message: string, error: boolean) => {
      if (type === 'deleting') {
        setLoader({ message, visible: true })
      } else {
        setLoader({ message, visible: false })
        setNotify({ message, visible: true, error })
      }
    }
  }

  return (
    <S.Section>
      <Text color="dark" size="medium" mb="2rem">
        Projects Content
      </Text>
      <Button
        icon={<FaFile />}
        color="primary"
        fontSize="medium"
        text="Add a project"
        onClick={() => router.push('/admin/add-project')}
      />

      <S.CarouselWrapper>
        <Carousel responsive={responsive} rtl>
          {data?.map((project) => (
            <Fragment key={project.slug}>
              <S.CarouselItem>
                <Project {...project} onExclude={handleProjectExclude} />
              </S.CarouselItem>
            </Fragment>
          ))}
        </Carousel>
      </S.CarouselWrapper>

      <Loader message={loader.message} visible={loader.visible} />
      <Notify
        type={notify.error ? 'error' : 'success'}
        message={notify.message}
        visible={notify.visible}
        onClose={() => setNotify({ message: '', visible: false, error: false })}
      />
    </S.Section>
  )
}

export default ProjectsContents
