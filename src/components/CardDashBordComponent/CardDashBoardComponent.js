import { useState, useEffect, useContext } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import StyledCardDashBoardComponent from './styles/CardDashBoardComponent.styled.js'
import { AppContext } from '../Context/Context.js'

export default function CardDashBoardComponent () {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const { countries } = useContext(AppContext)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line
  }, [])

  function handleResize () {
    setWindowDimensions(getWindowDimensions())
  }
  function getWindowDimensions () {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }
  return (
    <StyledCardDashBoardComponent
      height={windowDimensions.height}
    >
      {countries.map((country, index) => {
        return <CardComponent country={country} key={index} />
      })}
    </StyledCardDashBoardComponent>
  )
}
