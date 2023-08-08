import * as S from './styles'

import Text from '@/components/Text'
import Input from '@/components/Input'
import { Flex } from '@/components/Flex'

import { HomeProps } from '@/types/spa'
import { InputValue } from '@/types/form'
import File from '@/components/File'

const HomeContents = ({
  brand,
  btnText,
  resumes,
  formError
}: HomeProps & { formError: InputValue }) => {
  const checkError = (name: string): boolean => !!formError[name]

  return (
    <S.Section>
      <Text color="dark" size="medium">
        Home Content
      </Text>
      <Flex gap="4rem" m="3rem 0 0 0">
        <Input
          placeholder={
            checkError('homebrand') ? (formError.hometitle as string) : ''
          }
          label="Brand"
          labelcolor="dark"
          haserror={checkError('homebrand')}
          value={brand}
          name="homebrand"
          type="text"
          required
        />
        <Input
          placeholder={
            checkError('homebtn') ? (formError.homebtn as string) : ''
          }
          label="Button Text"
          labelcolor="dark"
          haserror={checkError('homebtn')}
          value={btnText}
          name="homebtn"
          type="text"
          required
        />
      </Flex>
      <Text color="dark" size="small" mt="2rem">
        Resumes
      </Text>
      <Text color="dark" size="small" mt="2rem">
        When uploading a new file, the old one will be replaced by the new one.
      </Text>
      <Flex gap="2rem">
        <File
          name="myresumeptbr"
          types={['application/pdf']}
          label={
            checkError('myresumeptbr')
              ? (formError.myresumeptbr as string)
              : 'My Resume (PT_BR)'
          }
          required={resumes.portuguese ? false : true}
          haserror={checkError('myresumeptbr')}
        />
        <File
          name="myresumeenglish"
          types={['application/pdf']}
          label={
            checkError('myresumeenglish')
              ? (formError.myresumeenglish as string)
              : 'My Resume (EN)'
          }
          required={resumes.english ? false : true}
          haserror={checkError('myresumeenglish')}
        />
      </Flex>
    </S.Section>
  )
}

export default HomeContents
