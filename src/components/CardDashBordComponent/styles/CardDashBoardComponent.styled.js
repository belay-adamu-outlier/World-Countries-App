import styled from "styled-components";

const StyledCardDashBoardComponent = styled.div`
  font-size: 1.6rem;
  overflow-y: scroll;
  padding-top: 30px;
  padding-left: 10px;
  height: ${({ height }) => (height ? height / 10 - 25.2 + "rem" : "auto")};
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto 0rem auto;

  @media (min-width: 576px) {
    height: ${({ height }) => (height ? height / 10 - 18.1 + "rem" : "auto")};
  }
`;
export default StyledCardDashBoardComponent;
