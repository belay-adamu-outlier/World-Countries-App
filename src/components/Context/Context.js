import {
  useEffect,
  useState,
  createContext
} from 'react'
import {
  getCountries,
  getCountry,
  getCountriesByRegion,
  getCountriesByName
} from '../../api'

const defaultValue = [false, [], false, {}]
export const AppContext = createContext(defaultValue)

export default function Context ({ children }) {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [borderCountries, setBorderCountries] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [errorLoading, setErrorLoading] = useState(false)

  useEffect(() => {
    setFetchedCountries()
    // eslint-disable-next-line
  }, [])

  async function setFetchedCountry () {
    const fetchedCountry = await getCountry()
    updateStates(fetchedCountry)
  }

  async function setFetchedCountryByName (name) {
    const fetchedCountry = await getCountriesByName()
    updateStates(fetchedCountry)
  }

  async function setFetchedCountries () {
    const fetchedCountries = await getCountries()
    updateStates(fetchedCountries)
  }

  async function setFetchedCountriesByRegion (region) {
    let fetchedCountries
    region === 'World'
      ? fetchedCountries = await getCountries()
      : fetchedCountries = await getCountriesByRegion(region)
    updateStates(fetchedCountries)
  }

  function filterCountry (name) {
    const selectedOne = countries.filter((country) => {
      return country.name.common === name
    })
    setSelectedCountry(selectedOne)
    findBorderCountries(selectedOne[0].borders)
  }

  function findBorderCountries (borderCountries) {
    const borderCtrs = []
    if (borderCountries) {
      borderCountries.forEach((borderCountry) => {
        countries.forEach((country) => {
          if (borderCountry === country.cca3) borderCtrs.push(country.name.common)
        })
      })
    }
    return setBorderCountries(borderCtrs)
  }

  function updateStates (fetchedData) {
    setIsLoading(false)
    if (countries.error) setErrorLoading(true)
    setCountries(fetchedData)
  }

  return (
    <AppContext.Provider
      value={{
        errorLoading,
        countries,
        isLoading,
        selectedCountry,
        darkTheme,
        borderCountries,
        setDarkTheme,
        setFetchedCountries,
        setFetchedCountry,
        LoadByRegion: setFetchedCountriesByRegion,
        toggleTheme: () => setDarkTheme(!darkTheme),
        filterCountry,
        findBorderCountries,
        setFetchedCountryByName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
