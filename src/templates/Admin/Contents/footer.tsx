import * as S from './styles'

import Text from '@/components/Text'
import Input from '@/components/Input'
import { Flex } from '@/components/Flex'

import { InputValue } from '@/types/form'
import { FooterProps } from '@/types/spa'

const FooterContents = ({
  title,
  socialMedia,
  pageSource,
  formError
}: FooterProps & { formError: InputValue }) => {
  const checkError = (name: string): boolean => !!formError[name]

  return (
    <S.Section>
      <Text color="dark" size="medium">
        Footer Content
      </Text>
      <Flex gap="4rem" m="3rem 0 0 0">
        <Input
          type="text"
          name="footertitle"
          placeholder={
            checkError('footertitle') ? (formError.footertitle as string) : ''
          }
          labelcolor="dark"
          label="Title"
          haserror={checkError('footertitle')}
          value={title}
          required
        />
        <Input
          type="text"
          name="footerpagesource"
          placeholder={
            checkError('footerpagesource')
              ? (formError.footerpagesource as string)
              : ''
          }
          labelcolor="dark"
          label="Page Source"
          haserror={checkError('footerpagesource')}
          value={pageSource}
          required
        />
      </Flex>
      <S.SocialMedia>
        <Flex gap="4rem">
          <Input
            type="text"
            name="footeryt"
            placeholder={
              checkError('footeryt') ? (formError.footeryt as string) : ''
            }
            labelcolor="dark"
            label="Youtube"
            haserror={checkError('footeryt')}
            value={socialMedia.youtube}
            required
          />
          <Input
            type="text"
            name="footerig"
            placeholder={
              checkError('footerig') ? (formError.footerig as string) : ''
            }
            labelcolor="dark"
            label="Instagram"
            haserror={checkError('footerig')}
            value={socialMedia.instagram}
            required
          />
        </Flex>
      </S.SocialMedia>
    </S.Section>
  )
}

export default FooterContents
