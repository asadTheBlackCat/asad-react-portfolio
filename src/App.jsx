import React from 'react'
import {Helmet} from "react-helmet";

// component linking
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experence/Experence'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <Helmet>
                <title>My Awasome Portfolio</title>
        </Helmet>

        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />

    </div>
  )
}

export default App