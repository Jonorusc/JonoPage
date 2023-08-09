import * as S from './styles'

import type { HomeProps } from '@/types/spa'

import Text from '@/components/Text'
import { Flex } from '@/components/Flex'

import { AnimatePresence } from 'framer-motion'

const DownloadCv = ({
  resumes,
  open
}: Pick<HomeProps, 'resumes'> & {
  open: boolean
}) => {
  const download = (url: string) => () => {
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      {open ? (
        <S.Wrapper>
          <Text color="whiteSmoke" size="medium">
            Choose your language
          </Text>
          <Flex justify="center" gap="1rem" align="center" keepFlex>
            <S.Flag onClick={download(resumes.english)}>
              <img src="/images/uk-flag.svg" alt="Flag of the United Kingdom" />
            </S.Flag>
            <S.Flag onClick={download(resumes.portuguese)}>
              <img src="/images/br-flag.svg" alt="Flag of the Brazil" />
            </S.Flag>
          </Flex>
        </S.Wrapper>
      ) : null}
    </AnimatePresence>
  )
}

export default DownloadCv
