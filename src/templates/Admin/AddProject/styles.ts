import styled, { css } from 'styled-components'
import { Container } from '@/components/Container'
import { Input } from '@/components/Input/styles'
import { Form } from '@/components/Form/styles'
import { Flex } from '@/components/Flex'
import { Wrapper as Button } from '@/components/Button/styles'

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    width: fit-content;
    display: flex;
    &:active {
      filter: brightness(0.8);
    }
  }

  @media screen and (min-width: 1400px) {
    ${Container} {
      max-width: 60vw;
    }
  }

  /* mobile */
  @media screen and (max-width: 768px) {
    ${Container} {
      max-width: 100%;
      padding: 0.4rem 1rem;
    }
  }
`

export const Section = styled.section`
  ${({ theme }) => css`
    margin-top: 7rem;
    @media screen and (min-width: 1400px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2.5rem 0;
      width: auto;
    }

    /* mobile */
    @media screen and (max-width: 768px) {
      width: 100%;
      ${Form} {
        width: 100%;
        ${Flex} {
          flex-direction: column;
        }

        ${Button} {
          width: 100%;
          justify-content: center;
        }
      }
    }

    background-color: ${theme.palette.whiteSmoke};
    padding: 2.5rem;
    width: fit-content;
    box-sizing: border-box;
    border-radius: ${theme.border.radius};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    ${Input} {
      height: 5rem;
    }
  `};
`
