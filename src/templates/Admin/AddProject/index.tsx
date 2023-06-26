import * as S from './styles'
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
import { FormProps } from '@/types/form'

export type AddProjectTemplateProps = Pick<FormProps, 'onSubmit' | 'onReset'>

const Template = ({ onSubmit, onReset }: AddProjectTemplateProps) => {
  return (
    <S.Wrapper>
      <Container padding="4.6rem">
        <Link href="/admin">
          <Text color="secondary" icon={<FaArrowLeft />} size="medium">
            Back to admin
          </Text>
        </Link>
        <Text color="dark" size="medium" mt="2rem">
          Adding a project
        </Text>

        <S.Section>
          <Form onSubmit={onSubmit} onReset={onReset} submitName="Save Project">
            <S.Flex gap="4rem">
              <S.FlexColumn gap="2.1rem">
                <Input name="title" placeholder="Title" type="text" />
                <Input
                  name="description"
                  placeholder="Description"
                  type="text"
                />
                <Input
                  name="readmemd"
                  placeholder="Readme.md"
                  type="textarea"
                />
              </S.FlexColumn>
              <S.FlexColumn gap="3.4rem">
                <Input
                  name="projectSourceCode"
                  placeholder="Project Source Code"
                  type="text"
                />
                <S.GridCenter>
                  <File
                    name="projectImages"
                    types={['image/png', 'image/jpeg']}
                    label="Add images"
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

export default Template
