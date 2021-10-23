import styled from 'styled-components'

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding-right: 1.5rem;

  @media (min-width: 576px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }
`
