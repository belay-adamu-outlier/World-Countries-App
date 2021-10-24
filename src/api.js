import axios from 'axios'

export async function getCountries () {
  try {
    return (await axios.get('https://restcountries.com/v3.1/all')).data
  } catch {
    return { error: 'error' }
  }
}

export async function getCountry (name) {
  try {
    return (await axios.get(`https://restcountries.com/v3.1/name/${name}`)).data
  } catch {
    return { error: 'error' }
  }
}

export async function getCountriesByRegion (region) {
  try {
    return (await axios.get(`https://restcountries.com/v3.1/region/${region}`))
      .data
  } catch {
    return { error: 'error' }
  }
}

export async function getCountriesByName (name) {
  try {
    return (await axios.get(`https://restcountries.com/v3.1/name/${name}`))
      .data
  } catch {
    return { error: 'error' }
  }
}
