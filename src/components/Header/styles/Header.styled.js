import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  box-shadow: 1px 0px 2px gray;
  background-color: ${(props) => (props.dark ? "hsl(207, 26%, 17%)" : "")};
  color: ${(props) => (props.dark ? "hsl(0, 0%, 100%)" : "")};

  @media (min-width: 992px) {
    padding: 0 5% 0 5%;
  }
`;

export const TitleWrapper = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 1.5rem;
`;
export const ThemeToggler = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-right: 1.4rem;
`;
