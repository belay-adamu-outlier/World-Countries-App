import React from "react";
import { SearchBar, FormGroupSearch } from "./styles/styles";

export default function SearchComponent() {
  return (
    <FormGroupSearch>
      <SearchBar placeholder="Search for a country" />
      <i className="fa fa-search"></i>
    </FormGroupSearch>
  );
}
