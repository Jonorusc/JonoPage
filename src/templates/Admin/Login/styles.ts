import styled, { css } from 'styled-components'
import { FlexColumn as FlexColumnBase } from '@/components/Flex'
import { Wrapper as Button } from '@/components/Button/styles'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    height: 100vh;
    padding: ${theme.spacing.large};
  `};
`

export const SignIn = styled.div.attrs({
  tabIndex: 0
})`
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 0.218s, border-color 0.218s;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dadce0;
  color: #3c4043;
  cursor: pointer;
  font-family: 'Google Sans', arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 230px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  margin: 1.5rem auto;
  svg {
    width: 18px;
  }

  span {
    flex-grow: 1;
    font-family: 'Google Sans', arial, sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }
`
export const Emoji = styled.i`
  font-size: 10rem;
  display: grid;
  place-items: center;
`

export const FlexColumn = styled(FlexColumnBase)`
  justify-content: center;

  ${Button} {
    margin: 1rem auto;
  }
`
