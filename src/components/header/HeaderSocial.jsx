import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target='_blank'><FaFacebook/></a>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://linkedin.com" target='_blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocial