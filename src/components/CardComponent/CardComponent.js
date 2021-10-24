import { useContext } from 'react'
import { AppContext } from '../Context/Context'
import {
  StyledCard,
  StyledFlag,
  StyledDetails,
  LinkWrapper
} from './styles/CardComponent.styled'

export default function CardComponent ({ country }) {
  const { darkTheme, filterCountry } = useContext(AppContext)

  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <LinkWrapper
      to='/country'
      onClick={() => filterCountry(country.name.common)}
    >
      <StyledCard dark={darkTheme}>
        <StyledFlag bgImg={country.flags.svg} />
        <StyledDetails>
          <h2>{country.name.common}</h2>
          <h3>
            Population: <span>{numberWithCommas(country.population)}</span>
          </h3>
          <h3>
            Region: <span>{country.region}</span>
          </h3>
          <h3>
            Capital: <span>{country.capital}</span>
          </h3>
        </StyledDetails>
      </StyledCard>
    </LinkWrapper>
  )
}
