import * as S from './styles'

import Text from '@/components/Text'
import Input from '@/components/Input'
import { Flex } from '@/components/Flex'

import { HomeProps } from '@/types/spa'
import { InputValue } from '@/types/form'

const HomeContents = ({
  brand,
  btnText,
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
    </S.Section>
  )
}

export default HomeContents
