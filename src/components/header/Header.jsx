import React from 'react'
import CTA from './CTA'
import ME from '../../assets/pp.png'

import './header.css'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__div">
          <div className="header__text">
            <h5>Hello this is...</h5>
            <h1>A B M Asadullah</h1>
            <h5 className="text-light">Front-End Engineer</h5>
            <CTA />
          </div>
          <div className="me">
            <img src={ME} alt="ME" />
          </div>
        </div>
        <HeaderSocial />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header