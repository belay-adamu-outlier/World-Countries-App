import React, { useContext } from 'react'
import Header from './components/Header/HeaderComponent'
import SearchComponent from './components/SearchComponent/SearchComponent'
import CustomeSelect from './components/SelectComponent/SelectComponent'
import CardDashBoardComponent from './components/CardDashBordComponent/CardDashBoardComponent'
import GlobalStyles from './GlobalStyles'
import { StyledFlexContainer } from './FlexContainer.styled'
import { AppContext } from './components/Context/Context'
// import CardDetailsComponent from './components/CardDetailsComponent'
function App () {
  const {
    isLoading,
    errorLoading,
    darkTheme
  } = useContext(AppContext)
  return (
    <div className='App'>
      <GlobalStyles dark={darkTheme} />
      <Header />
      <StyledFlexContainer>
        <SearchComponent />
        <CustomeSelect />
      </StyledFlexContainer>
      {!(isLoading || errorLoading) && <CardDashBoardComponent />}
      {/* <CardDetailsComponent /> */}
    </div>
  )
}

export default App
