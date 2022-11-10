import React from 'react'
import CTA from './CTA'
import ME from '../../assets/pp.png'

import './header.css'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello this is...</h5>
        <h1>Asad.TECH</h1>
        <h5 className="text-light">Front-End Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header