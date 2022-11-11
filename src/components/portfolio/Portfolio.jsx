import React from 'react'
import './portfolio.css'
import image1 from '../../assets/portfolio1.jpg'
import image2 from '../../assets/portfolio2.jpg'
import image3 from '../../assets/portfolio3.jpg'
import image4 from '../../assets/portfolio4.jpg'
import image5 from '../../assets/portfolio5.png'
import image6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My BEST Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image1} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image2} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image3} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image4} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image5} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image6} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio