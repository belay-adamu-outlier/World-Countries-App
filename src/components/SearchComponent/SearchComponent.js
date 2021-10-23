import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { SearchBar, FormGroupSearch } from './styles/SearchComponent.styled'

export default function SearchComponent () {
  const { darkTheme } = useContext(AppContext)
  return (
    <FormGroupSearch dark={darkTheme}>
      <SearchBar
        dark={darkTheme}
        placeholder='Search for a country'
      />
      <i className='fa fa-search' />
    </FormGroupSearch>
  )
}
