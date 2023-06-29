import styled from 'styled-components'
import { Container } from '@/components/Container'

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
