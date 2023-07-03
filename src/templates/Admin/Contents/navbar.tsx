import * as S from './styles'

import Text from '@/components/Text'
import Input from '@/components/Input'
import File from '@/components/File'
import { Flex } from '@/components/Flex'

import { NavBar } from '@/types/spa'
import { InputValue } from '@/types/form'

const NavbarContents = ({
  brand,
  img,
  formError
}: NavBar & { formError: InputValue }) => {
  const checkError = (name: string): boolean => !!formError[name]
  // { imgUrl: ImageObject[] } - belongs to FileProps type from `@/types/file`
  const imgUrl = img ? [{ url: img }] : []

  return (
    <S.Section>
      <Text color="dark" size="medium">
        Navbar Content
      </Text>
      <Flex gap="4rem" m="3rem 0 0 0">
        <Input
          type="text"
          name="navbarbrand"
          placeholder={
            checkError('navbarbrand') ? (formError.navbarbrand as string) : ''
          }
          labelcolor="dark"
          label="Navbar Brand"
          haserror={checkError('navbarbrand')}
          value={brand}
          required
        />
        <File
          name="navbarimg"
          types={['image/png', 'image/jpeg']}
          label={
            checkError('navbarimg')
              ? (formError.navbarimg as string)
              : 'Navbar Profile Image'
          }
          haserror={checkError('navbarimg')}
          required
          img={imgUrl}
        />
      </Flex>
    </S.Section>
  )
}

export default NavbarContents
