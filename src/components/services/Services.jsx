import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Personal Portfolio</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolio website for any profession like Artist, Singer, Doctor, Engineer, Lowyer, Designer, etc.  </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Make Packages like Animation, Transition & Color Grading for looking gorgious.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>You can change style, typography or theme anytime.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use some technologies for making your site SUPPER FAST.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Small Business Website</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any type of small business website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any type of startup business website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use some technologies for making your site SUPPER FAST.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Make Packages like Animation, Transition & Color Grading for looking gorgious.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>You can change style, typography or theme anytime.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Update Old Website</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use advance technologies to make your old website attractive.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Old Admin or MIS software can covert to a new web application.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop old business site to get more audiance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services