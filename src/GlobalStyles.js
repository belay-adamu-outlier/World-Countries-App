import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
}
#try {
  color: rgb(201, 193, 193);
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
    background-color: ${({ dark }) =>
      dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'};
    color: ${({ dark }) => (dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
}
.App {
  font-family: "Nunito Sans", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
`
export default GlobalStyles
