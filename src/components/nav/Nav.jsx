import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsBook} from 'react-icons/bs'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav