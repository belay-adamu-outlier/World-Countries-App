import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100px;
  font-size: 1.4rem;
  padding: 4px 15px;
  margin: 10px 0 0 10px;
  background-color: ${({ dark }) =>
    dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
  color: ${({ dark }) => (dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
  transition: all ease-in 0.1s;
  cursor: pointer;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    box-shadow: 0 0 1px gray;
    background-color: ${({ dark }) =>
      dark ? 'hsl(0, 0%, 100%)' : 'hsl(207, 26%, 17%)'};
    color: ${({ dark }) => (dark ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)')};
  }
`

export const StyledCountriesButton = styled(StyledButton)`
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const StyledButtonWrapper = styled.div`
  margin: 20px 0 0 10px;

  @media (min-width: 992px) {
    margin: 20px 5% 0 5%;
  }
`

export const StyledFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;

  @media (min-width: 1390px) {
    align-items: center;
  }
`

export const StyledFlag = styled.div`
  width: 320px;
  height: 200px;
  background-color: green;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 400px;
    height: 250px;
  }
  @media (min-width: 1390px) {
    width: 700px;
    height: 438px;
  }
`

export const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 320px;
  margin: 50px auto 0 auto;

  align-items: flex-start;

  div:nth-child(1) {
    width: 100%;
    margin-bottom: 20px;
  }

  div:nth-child(2),
  div:nth-child(3) {
    width: 100%;
    margin-bottom: 30px;
    h3 {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 578px) {
    padding: 0 50px;
    width: 500px;
    div:nth-child(1) {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }

    div:nth-child(2),
    div:nth-child(3) {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      h3 {
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    div:nth-child(1) {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }

    div:nth-child(2),
    div:nth-child(3) {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      h3 {
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 992px) {
    margin-top: 0px;
    width: 500px;
    div:nth-child(1) {
      text-align: left;
      width: 100%;
      margin-bottom: 20px;
    }

    div:nth-child(2),
    div:nth-child(3) {
      width: 50%;
      h3 {
        margin-bottom: 10px;
      }
    }
  }
`

export const StyledBorderContriesWrapper = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 50px;
  margin: 0 auto 0 auto;
  flex-flow: row wrap;
  font-size: 1.6rem;

  h2 {
    width: 100%;
    font-size: 1.6rem;
  }
  div:last-child {
    width: 100%;
    margin-left: -10px;
  }

  @media (min-width: 578px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    margin-right: 10px;
    margin-left: auto;
  }
`
