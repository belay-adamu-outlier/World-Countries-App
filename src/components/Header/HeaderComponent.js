import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import {
  HeaderWrapper,
  TitleWrapper,
  ThemeToggler
} from './styles/Header.styled'

export default function Header () {
  const { darkTheme, toggleTheme } = useContext(AppContext)
  return (
    <HeaderWrapper dark={darkTheme}>
      <TitleWrapper>Where in the world?</TitleWrapper>
      <ThemeToggler onClick={toggleTheme}>
        <i className='fa fa-moon-o icon' />
        <span>&nbsp;&nbsp;Dark Mode</span>
      </ThemeToggler>
    </HeaderWrapper>
  )
}
