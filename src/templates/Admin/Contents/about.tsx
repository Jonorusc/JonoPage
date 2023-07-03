import * as S from './styles'

import Text from '@/components/Text'
import Input from '@/components/Input'
import { Flex } from '@/components/Flex'

import { AboutProps } from '@/types/spa'
import { InputValue } from '@/types/form'

const AboutContents = ({
  title,
  paragraph,
  formError
}: AboutProps & { formError: InputValue }) => {
  const checkError = (name: string): boolean => !!formError[name]

  return (
    <S.Section>
      <Text color="dark" size="medium">
        About Content
      </Text>
      <Flex gap="4rem" m="3rem 0 0 0">
        <Input
          type="text"
          name="abouttitle"
          placeholder={
            checkError('abouttitle') ? (formError.abouttitle as string) : ''
          }
          labelcolor="dark"
          label="About Title"
          haserror={checkError('abouttitle')}
          value={title}
          required
        />
        <Input
          type="textarea"
          name="aboutparagraph"
          placeholder={
            checkError('aboutparagraph')
              ? (formError.aboutparagraph as string)
              : 'About paragraph'
          }
          haserror={checkError('aboutparagraph')}
          value={paragraph}
          required
        />
      </Flex>
    </S.Section>
  )
}

export default AboutContents
