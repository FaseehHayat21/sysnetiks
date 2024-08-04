import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Carousel from '../Component/Carousel/Carousel'
import Showcase from '../Component/Showcase/Showcase'
import Intro from '../Component/Intro/Intro'
import Services from '../Component/Services/Services'
import Business from '../Component/Business/Business'
import Product from '../Component/Product/Product'
import About from '../Component/About/About'
import ContactUs from '../Component/ContactUs/ContactUs'
import Quality from '../Component/Quality/Quality'
import SignUp from '../Component/SignUp/SignUp'

export default function LandingPage() {
  return (
  <>
    
    <div id='home'>
     <Carousel/>
     </div>
     <div id="showcase">
     <Showcase/>
     </div>
     <div id="about">
     <About/>
     </div>
     <div id="intro">
     <Intro/>
     </div>
     <div id="service">
     <Services/>
     </div>
     <div id="service">
      <Quality/>
     </div>
     <div id="business">
     <Business/>
     </div>
     <div id="product">
     <Product/>
     </div>
     <div id="contactus">
     <ContactUs/>
     </div>
  </>
  )
}
