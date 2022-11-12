import React from 'react'
import './testimonial.css'
import clientImage1 from '../../assets/avatar1.jpg'
import clientImage2 from '../../assets/avatar2.jpg'
import clientImage3 from '../../assets/avatar3.jpg'
import clientImage4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <section id='testimonial'>
      <h5>Review from clients and teammates</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="mySwiper container testimonials__container">
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={clientImage4} alt="Client Photo" />
          </div>
          <h5 className='client__name'>Cosmel Villalobos</h5>
          <small className='client__review' >
          I met A B M Asadullah during pair programming at Microverse we worked on a few projects. He is very creative and supportive. He is a quick learner and hard-working. He has a great way of simplifying complex problems into bite-sized pieces. If you want someone who is a great collaborator and great at solving problems, A B M Asadullah is the right guy for you! <a href="https://www.linkedin.com/in/cosvilla/" target='_blank'>Link</a>
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={clientImage2} alt="Client Photo" />
          </div>
            <h5 className='client__name'>Cosmel Villae</h5>
            <small className='client__review' >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta hic quis dolores earum perspiciatis sunt reiciendis! Quis labore nostrum dolorem.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={clientImage3} alt="Client Photo" />
          </div>
            <h5 className='client__name'>Gubrial Swarez</h5>
            <small className='client__review' >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta hic quis dolores earum perspiciatis sunt reiciendis! Quis labore nostrum dolorem.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={clientImage1} alt="Client Photo" />
          </div>
            <h5 className='client__name'>Recardo Mountino</h5>
            <small className='client__review' >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta hic quis dolores earum perspiciatis sunt reiciendis! Quis labore nostrum dolorem.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial