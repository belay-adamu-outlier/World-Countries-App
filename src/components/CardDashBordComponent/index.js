import { useState, useEffect } from "react";
import CardComponent from "../CardComponent/index.js";
import StyledCardDashBoardComponent from "./styles/CardDashBoardComponent.styled.js";
export default function CardDashBoardComponent() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return (
    <StyledCardDashBoardComponent height={windowDimensions.height}>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </StyledCardDashBoardComponent>
  );
}
