import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>A B M ASADULLAH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="facebook.com" target='_blank'>< FiFacebook /></a>
        <a href="instagram.com" target='_blank'><BsInstagram /></a>
        <a href="twitter.com" target='_blank'><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; A B M Asadullah.</small>
      </div>
    </footer>
  )
}

export default Footer