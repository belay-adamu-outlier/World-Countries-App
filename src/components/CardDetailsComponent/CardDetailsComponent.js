import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/Context'
import {
  StyledButton,
  StyledCountriesButton,
  StyledButtonWrapper,
  StyledFlag,
  StyledFlexWrapper,
  StyledDetailsWrapper,
  StyledBorderContriesWrapper
} from './styles/CardDetailsComponent.styled'
export default function CardDetailsComponent () {
  const {
    selectedCountry,
    darkTheme,
    borderCountries,
    filterCountry
  } = useContext(AppContext)
  const {
    name: {
      common
    },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags: { svg }
  } = selectedCountry[0]

  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <>
      <StyledButtonWrapper>
        <Link to='/'>
          <StyledButton dark={darkTheme}>
            <i className='fa fa-long-arrow-left' />
            &nbsp; Back
          </StyledButton>
        </Link>
      </StyledButtonWrapper>
      <StyledFlexWrapper>
        <StyledFlag bgImg={svg} />
        <StyledDetailsWrapper>
          <div>
            <h2>{common || 'name'}</h2>
          </div>
          <div>
            <h3>
              Native name: <span>{common || 'native-name'}</span>
            </h3>
            <h3>
              Population: <span>{numberWithCommas(population)}</span>
            </h3>
            <h3>
              Region: <span>{region || 'region'}</span>
            </h3>
            <h3>
              Sub Region: <span>{subregion || 'sub-region'}</span>
            </h3>
            <h3>
              Capital: <span>{capital ? capital[0] : 'capital'}</span>
            </h3>
          </div>
          <div>
            <h3>
              Top Level Domain: <span>{tld ? tld[0] : 'top-level-domain'}</span>
            </h3>
            <h3>
              Currencies: <span>{currencies[Object.keys(currencies)[0]].name || 'currencies'}</span>
            </h3>
            <h3>
              Language: <span>{languages[Object.keys(languages)[0]] || 'language'}</span>
            </h3>
          </div>
          <StyledBorderContriesWrapper>
            <h2>Border Countries:</h2>
            <div>
              {borderCountries !== [] &&
                borderCountries.map(country => {
                  return (
                    <StyledCountriesButton
                      dark={darkTheme}
                      key={country}
                      onClick={() => filterCountry(country)}
                    >
                      {country}
                    </StyledCountriesButton>
                  )
                })}
            </div>
          </StyledBorderContriesWrapper>
        </StyledDetailsWrapper>
      </StyledFlexWrapper>
    </>
  )
}
