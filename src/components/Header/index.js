import React from 'react'
import {
  HeaderWrapper,
  TitleWrapper,
  ThemeToggler
} from './styles/Header.styled'

export default function Header () {
  return (
    <HeaderWrapper>
      <TitleWrapper>Where in the world?</TitleWrapper>
      <ThemeToggler>
        <i className='fa fa-moon-o icon' />
        <span>&nbsp;&nbsp;Dark Mode</span>
      </ThemeToggler>
    </HeaderWrapper>
  )
}
