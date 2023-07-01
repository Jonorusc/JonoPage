import * as S from './styles'
import { DialogProps } from '@/types/dialog'
import Button from '@/components/Button'
import Text from '@/components/Text'
import { Flex } from '@/components/Flex'

const Dialog = ({ open, title, onYes, onNo }: DialogProps) => {
  return (
    <S.Animate>
      {open ? (
        <S.Wrapper>
          <S.Dialog>
            <Text color="dark" size="medium">
              {title}
            </Text>
            <Flex gap="1rem">
              <Button text="Yes" onClick={onYes} />
              <Button text="No" onClick={onNo} />
            </Flex>
          </S.Dialog>
        </S.Wrapper>
      ) : null}
    </S.Animate>
  )
}

export default Dialog
