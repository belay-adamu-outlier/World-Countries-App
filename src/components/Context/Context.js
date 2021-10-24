import { useEffect, useState, createContext } from 'react'
import {
  getCountries,
  getCountry,
  getCountriesByRegion
} from '../../api'

const defaultValue = [false, [], false, {}]
export const AppContext = createContext(defaultValue)

export default function Context ({ children }) {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [darkTheme, setDarkTheme] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [errorLoading, setErrorLoading] = useState(false)

  useEffect(() => {
    setFetchedCountries()
    // eslint-disable-next-line
  }, [])

  async function setFetchedCountry (name) {
    const fetchedCountry = await getCountry()
    updateState(fetchedCountry)
  }

  async function setFetchedCountries () {
    const fetchedCountries = await getCountries()
    updateState(fetchedCountries)
  }

  async function setFetchedCountriesByRegion (region) {
    let fetchedCountries
    region === 'World'
      ? fetchedCountries = await getCountries()
      : fetchedCountries = await getCountriesByRegion(region)
    updateState(fetchedCountries)
  }

  function filterCountry (name) {
    const selectedOne = countries.filter((country) => {
      return country.name.common === name
    })
    setSelectedCountry(selectedOne)
  }
  function updateState(fetchedData) {
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
        setDarkTheme,
        setFetchedCountries,
        setFetchedCountry,
        LoadByRegion: setFetchedCountriesByRegion,
        toggleTheme: () => setDarkTheme(!darkTheme),
        filterCountry
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
