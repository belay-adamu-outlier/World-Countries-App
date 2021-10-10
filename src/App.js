import React from "react";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";
import CustomeSelect from "./components/SelectComponent";
import CardDashBoardComponent from "./components/CardDashBordComponent";
import GlobalStyles from "./GlobalStyles";
import { StyledFlexContainer } from "./FlexContainer.styled";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <StyledFlexContainer>
        <SearchComponent />
        <CustomeSelect />
      </StyledFlexContainer>
      <CardDashBoardComponent />
    </div>
  );
}

export default App;
