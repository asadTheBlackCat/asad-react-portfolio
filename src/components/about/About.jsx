import React from 'react'
import './about.css'
import aboutImg from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImg} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Full time job + many clients</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ real life projects</small>
            </article>
          </div>
          <div className="about__paragraph">
            <p>I am a Front-End Engineer with experience in building websites and web applications. I specialize in various JavaScript front framework like Angular, React & Vue. I've also worked with other technologies including Ruby on Rails, Django, and Flask.</p>
            <p>
              I completed BSc(Hons) in Computer Science & Engineering from Manarat International University. At the University I created many projects like Web applications using RoR, Python-Django & Flask, AI projects using Machine Learning. Also solved many problems by C & C++ programming language.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About