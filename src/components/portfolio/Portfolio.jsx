import React from 'react'
import './portfolio.css'
import image1 from '../../assets/port1.png'
import image2 from '../../assets/port2.png'
import image3 from '../../assets/port3.png'
import image4 from '../../assets/port4.png'
import image5 from '../../assets/port5.png'
import image6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My BEST Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image2} alt="" />
          </div>
          <h3>Old Apple Website</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/abmAsadullah/backgrounds-and-gradients-project" className='btn' target='_blank'>Github</a>
            <a href="https://abmasadullah.github.io/backgrounds-and-gradients-project/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image1} alt="" />
          </div>
          <h3>The Next Web-Clone</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/abmAsadullah/theNextweb-Resp" className='btn' target='_blank'>Github</a>
            <a href="https://abmasadullah.github.io/theNextweb-Resp/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image3} alt="" />
          </div>
          <h3>Angular-Awasome ToDo</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/abmAsadullah/angular-awesome-todo" className='btn' target='_blank'>Github</a>
            <a href="https://user-images.githubusercontent.com/29490094/172474493-ac61be87-c49f-4b09-9b25-152a7f2d278e.png" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image4} alt="" />
          </div>
          <h3>Angular-Weather App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/abmAsadullah/angular-weather-app" className='btn' target='_blank'>Github</a>
            <a href="https://user-images.githubusercontent.com/29490094/179361029-fe87cb4c-73b2-4411-8ba1-110d8fce8d59.png" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image5} alt="" />
          </div>
          <h3>MIU CSE Fest Event</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/abmAsadullah/Capstone-MIU_CSE_FEST" className='btn' target='_blank'>Github</a>
            <a href="https://abmasadullah.github.io/Capstone-MIU_CSE_FEST/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image6} alt="" />
          </div>
          <h3>Comming soon...</h3>
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