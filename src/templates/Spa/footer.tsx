import * as S from './styles'

import Text from '@/components/Text'
import { FlexColumn, GridCenter } from '@/components/Flex'

import type { FooterProps } from '@/types/spa'
import TagsInput from '@/components/TagsInput'
import { FaGithub } from 'react-icons/fa'

const Footer = ({ title, socialMedia, pageSource }: FooterProps) => {
  const tags: string[] = Object.values(socialMedia)

  return (
    <S.Wrapper
      height="40vh"
      cssText="a { text-decoration: none;} position: relative; margin-top: 20rem;"
      id="footer"
    >
      <GridCenter>
        <FlexColumn justify="center" align="center" gap="1rem">
          <Text color="darker" size="xlarge" bold>
            {title}
          </Text>
          <TagsInput
            initialTags={tags}
            disabled={true}
            placeholder="Social Media"
            name="socialMedia"
          />
          <Text color="darker" size="small" bold align="center">
            here we are done, that's all. Wanna see how I created this web page?
          </Text>
          <a href={pageSource}>
            <Text
              color="blueGreen"
              size="small"
              align="center"
              icon={<FaGithub />}
            >
              page source
            </Text>
          </a>
          <Text color="darker" size="medium" align="center" bold mt="3rem">
            Created by Lucas
          </Text>
        </FlexColumn>
      </GridCenter>
    </S.Wrapper>
  )
}

export default Footer
