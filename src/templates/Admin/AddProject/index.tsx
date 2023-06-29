import * as S from './styles'
import { useState } from 'react'

// components
import Form from '@/components/Form'
import Input from '@/components/Input'
import File from '@/components/File'
import { FlexColumn, Flex, GridCenter } from '@/components/Flex'

// types
import { FormProps, FormErrorCallbackFunction, InputValue } from '@/types/form'

export type AddProjectTemplateProps = Pick<FormProps, 'onSubmit' | 'onReset'>

const NewProject = ({ onSubmit, onReset }: AddProjectTemplateProps) => {
  const [formError, setFormError] = useState<InputValue>({})

  const onError: FormErrorCallbackFunction = (errors) => setFormError(errors)

  const checkError = (name: string): boolean => !!formError[name]

  return (
    <S.Section>
      <Form
        onSubmit={onSubmit}
        onReset={onReset}
        onError={onError}
        submitName="Save Project"
      >
        <Flex gap="4rem">
          <FlexColumn gap="2.1rem">
            <Input
              name="title"
              placeholder={
                checkError('title')
                  ? (formError.description as string)
                  : 'Title'
              }
              haserror={checkError('title')}
              type="text"
              required
            />
            <Input
              name="description"
              placeholder={
                checkError('description')
                  ? (formError.description as string)
                  : 'Description'
              }
              haserror={checkError('description')}
              type="text"
              required
            />
            <Input name="readme" placeholder="Readme.md" type="textarea" />
          </FlexColumn>
          <FlexColumn gap="2.1rem">
            <Input
              name="source"
              placeholder={
                checkError('source')
                  ? (formError.description as string)
                  : 'Project Source Code'
              }
              haserror={checkError('source')}
              type="text"
              required
            />
            <GridCenter>
              <File
                name="img"
                types={['image/png', 'image/jpeg']}
                label={
                  checkError('img')
                    ? (formError.description as string)
                    : 'Add images'
                }
                haserror={checkError('img')}
                multiple={true}
                required
              />
            </GridCenter>
          </FlexColumn>
        </Flex>
      </Form>
    </S.Section>
  )
}

export default NewProject
