import React from "react";
import { HeaderWrapper, TitleWrapper, ThemeToggler } from "./styles/styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <TitleWrapper>Where in the world?</TitleWrapper>
      <ThemeToggler>
        <i className="fa fa-moon-o icon"></i>
        <span>&nbsp;&nbsp;Dark Mode</span>
      </ThemeToggler>
    </HeaderWrapper>
  );
}
