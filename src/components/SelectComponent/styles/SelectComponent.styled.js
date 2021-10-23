import styled from 'styled-components'

export const StyledSelectWrapper = styled.div`
  position: relative;
  height: 4.6rem;
  display: grid;
  width: 160px;
  margin: 4rem 1.5rem 0 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${(props) => (props.dark ? 'white' : 'hsl(200, 15%, 8%)')};
  background-color: ${(props) =>
    props.dark ? ' hsl(209, 23%, 22%)' : 'white'};
  box-shadow: 0px 0px 5px rgb(201 193 193);

  &::after {
    z-index: 10;
    content: "";
    width: 0.8rem;
    height: 0.5rem;
    background-color: black;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    position: absolute;
    top: 2.05rem;
    right: 1rem;
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 4.6rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.dark ? ' hsl(209, 23%, 22%)' : 'white'};
  color: ${(props) => (props.dark ? 'white' : 'hsl(200, 15%, 8%)')};
  appearance: none;
  border: none;
  outline: none;
  cursor: inherit;
`
