import React from "react";
import {
  StyledSelect,
  StyledSelectWrapper,
} from "./styles/SelectComponent.styled";

export default function CustomeSelect() {
  return (
    <StyledSelectWrapper>
      <StyledSelect>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </StyledSelect>
    </StyledSelectWrapper>
  );
}
