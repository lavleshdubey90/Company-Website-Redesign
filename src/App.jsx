import React from 'react'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='text-zinc-700'>
      <Navbar />
      <Herosection />
      <AboutUs />
      <Products />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;