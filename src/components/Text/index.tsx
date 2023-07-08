import * as S from './styles'
import { TextProps } from '@/types/text'
import React from 'react'

const Text = React.memo(
  ({
    size = 'small',
    color,
    bold = false,
    icon = null,
    iconposition = 'left',
    gap = '0.5rem',
    up = false,
    m = '',
    mt = '',
    mb = '',
    mr = '',
    ml = '',
    children
  }: TextProps) => {
    return (
      <S.Wrapper
        size={size}
        color={color}
        gap={gap}
        m={m}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        up={up ? up : undefined}
        bold={bold ? bold : undefined}
      >
        {children ? (
          <S.Text dangerouslySetInnerHTML={{ __html: children }} />
        ) : null}
        {icon ? <S.Icon iconposition={iconposition}>{icon}</S.Icon> : null}
      </S.Wrapper>
    )
  }
)

Text.displayName = 'Text'

export default Text
