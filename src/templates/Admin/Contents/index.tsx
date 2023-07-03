import { FlexColumn } from '@/components/Flex'
import HomeContents from './home'
import NavbarContents from './navbar'
import AboutContents from './about'
import ProjectsContents from './projects'
import FooterContents from './footer'

import Form from '@/components/Form'

import { SpaProps } from '@/types/spa'
import { FormProps, FormErrorCallbackFunction, InputValue } from '@/types/form'

import { useState } from 'react'

const Contents = ({
  home,
  navbar,
  about,
  projects,
  footer,
  onSubmit
}: SpaProps & Pick<FormProps, 'onSubmit' | 'onReset'>) => {
  const [formError, setFormError] = useState<InputValue>({})

  const onError: FormErrorCallbackFunction = (errors) => setFormError(errors)

  return (
    <Form onSubmit={onSubmit} onError={onError}>
      <FlexColumn gap="7.7rem" m="5rem 0 0 0">
        <NavbarContents {...navbar} formError={formError} />
        <HomeContents {...home} formError={formError} />
        <AboutContents {...about} formError={formError} />
        <ProjectsContents projects={projects} />
        <FooterContents {...footer} formError={formError} />
      </FlexColumn>
    </Form>
  )
}

export default Contents
