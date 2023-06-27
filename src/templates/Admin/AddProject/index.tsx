import * as S from './styles'
import { useState } from 'react'

// components
import Text from '@/components/Text'
import Link from 'next/link'
import { Container } from '@/components/Container'
import Form from '@/components/Form'
import Input from '@/components/Input'
import File from '@/components/File'

// icons
import { FaArrowLeft } from 'react-icons/fa'

// types
import { FormProps, FormErrorCallbackFunction, InputValue } from '@/types/form'

export type AddProjectTemplateProps = Pick<FormProps, 'onSubmit' | 'onReset'>

const NewProject = ({ onSubmit, onReset }: AddProjectTemplateProps) => {
  const [formError, setFormError] = useState<InputValue>({})

  const onError: FormErrorCallbackFunction = (errors) => setFormError(errors)

  const checkError = (name: string): boolean => !!formError[name]

  return (
    <S.Wrapper>
      <Container padding="4.6rem">
        <S.FlexColumn>
          <Link href="/admin">
            <Text
              color="secondary"
              icon={<FaArrowLeft />}
              size="medium"
              gap="1rem"
            >
              Back to admin
            </Text>
          </Link>
          <Text color="dark" size="medium" mt="2rem">
            Adding a project
          </Text>
        </S.FlexColumn>

        <S.Section>
          <Form
            onSubmit={onSubmit}
            onReset={onReset}
            onError={onError}
            submitName="Save Project"
          >
            <S.Flex gap="4rem">
              <S.FlexColumn gap="2.1rem">
                <Input
                  name="title"
                  placeholder={
                    checkError('title') ? formError.description : 'Title'
                  }
                  haserror={checkError('title')}
                  type="text"
                  required
                />
                <Input
                  name="description"
                  placeholder={
                    checkError('description')
                      ? formError.description
                      : 'Description'
                  }
                  haserror={checkError('description')}
                  type="text"
                  required
                />
                <Input name="readme" placeholder="Readme.md" type="textarea" />
              </S.FlexColumn>
              <S.FlexColumn gap="2.1rem">
                <Input
                  name="source"
                  placeholder={
                    checkError('source')
                      ? formError.description
                      : 'Project Source Code'
                  }
                  haserror={checkError('source')}
                  type="text"
                  required
                />
                <S.GridCenter>
                  <File
                    name="img"
                    types={['image/png', 'image/jpeg']}
                    label={
                      checkError('img') ? formError.description : 'Add images'
                    }
                    haserror={checkError('img')}
                    multiple={true}
                    required
                  />
                </S.GridCenter>
              </S.FlexColumn>
            </S.Flex>
          </Form>
        </S.Section>
      </Container>
    </S.Wrapper>
  )
}

export default NewProject
