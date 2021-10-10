import styled from "styled-components";

export const FormGroupSearch = styled.div`
  position: relative;
  height: fit-content;
  width: 324px;
  margin-top: 4rem;
  margin-left: 1.5rem;
  color: ${(props) => (props.dark ? "rgb(201, 193, 193)" : "gray")};
  i {
    position: absolute;
    left: 1.5rem;
    font-size: 2rem;
    top: 1.3rem;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 4.6rem;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px rgb(201, 193, 193);
  border-radius: 0.5rem;
  padding-left: 5rem;
  color: ${(props) => (props.dark ? "white" : "hsl(200, 15%, 8%)")};
  background-color: ${(props) =>
    props.dark ? " hsl(209, 23%, 22%)" : "white"};

  &::placeholder {
    color: ${(props) => (props.dark ? "rgb(201, 193, 193)" : "gray")};
  }
`;
