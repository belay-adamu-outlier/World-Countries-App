import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 260px;
  height: 350px;
  margin: 0 10px 15px 10px;
  background-color: ${({ dark }) =>
    dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 100%)'};
  color: ${({ dark }) => (dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  overflow: hidden;
  transition: all ease-in-out 0.1s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 15px black;
  }
`

export const StyledFlag = styled.div`
  height: 45%;
  width: 100%;
  background-image: ${({ bgImg }) => bgImg ? `url(${bgImg})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledDetails = styled.div`
  padding: 25px;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    width: 210px;
    display: inline-block;
    overflow: hidden;
    white-space:nowrap;
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    span {
      font-size: 1.3rem;
    }
  }
`
