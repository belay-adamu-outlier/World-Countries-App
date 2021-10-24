import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import {
  StyledSelect,
  StyledSelectWrapper
} from './styles/SelectComponent.styled'

export default function CustomeSelect () {
  const {
    LoadByRegion,
    darkTheme
  } = useContext(AppContext)
  return (
    <StyledSelectWrapper dark={darkTheme}>
      <StyledSelect
        dark={darkTheme}
        onChange={(e) => {
          LoadByRegion(e.target.value)
        }}
      >
        <option value='World' defaultValue>World</option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </StyledSelect>
    </StyledSelectWrapper>
  )
}
