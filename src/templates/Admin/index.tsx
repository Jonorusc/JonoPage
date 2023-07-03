import * as S from './styles'

// components
import { Container } from '@/components/Container'
import { FlexColumn } from '@/components/Flex'
import Link from 'next/link'
import Text from '@/components/Text'

// icons
import { FaArrowLeft } from 'react-icons/fa'

export type AdminTemplateProps = {
  link: string
  linkLabel: string
  title: string
  children: React.ReactNode
}

const AdminTemplate = ({
  link,
  linkLabel,
  title,
  children
}: AdminTemplateProps) => {
  return (
    <S.Wrapper>
      <Container padding="4rem">
        <FlexColumn>
          <Link href={`${link}`}>
            <Text
              color="secondary"
              icon={<FaArrowLeft />}
              size="medium"
              gap="1rem"
            >
              {linkLabel}
            </Text>
          </Link>
          <Text color="dark" size="medium" mt="2rem" istitle>
            {title}
          </Text>
        </FlexColumn>
        {children}
      </Container>
    </S.Wrapper>
  )
}

export default AdminTemplate
