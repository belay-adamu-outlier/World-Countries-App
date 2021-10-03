import React from "react";
import Header from './components/Header/Header'
import SearchComponent from "./components/SearchComponent/SeachComponent";
import CustomeSelect from "./components/SelectComponent/CustomeSelect";
function App() {
  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <CustomeSelect />
    </div>
  );
}

export default App;
