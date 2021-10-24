import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/HeaderComponent'
import SearchComponent from './components/SearchComponent/SearchComponent'
import CustomeSelect from './components/SelectComponent/SelectComponent'
import CardDashBoardComponent from './components/CardDashBordComponent/CardDashBoardComponent'
import GlobalStyles from './GlobalStyles'
import { StyledFlexContainer } from './FlexContainer.styled'
import { AppContext } from './components/Context/Context'
import CardDetailsComponent from './components/CardDetailsComponent/CardDetailsComponent'
function App () {
  const {
    isLoading,
    errorLoading,
    darkTheme,
    selectedCountry
  } = useContext(AppContext)
  return (
    <Router>
      <div className='App'>
        <GlobalStyles dark={darkTheme} />
        <Header />
        <Switch>
          <Route exact path='/country'>
            {selectedCountry && <CardDetailsComponent />}
          </Route>
          <Route path='/'>
            <StyledFlexContainer>
              <SearchComponent />
              <CustomeSelect />
            </StyledFlexContainer>
            {!(isLoading || errorLoading) && <CardDashBoardComponent />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
