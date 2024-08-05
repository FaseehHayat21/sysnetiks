import React from 'react'
import c1 from "../../assets/HomeImages/c1.jpg"
import c2 from "../../assets/HomeImages/c2.jpg"
import c3 from "../../assets/HomeImages/c3.jpg"
import c4 from "../../assets/HomeImages/c4.jpg"
import "./Carousel.css"
export default function Carousel() {
  return (
   <>
  

<div id="carouselExampleDark" class="carousel carousel-dark slide"  data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button panigation" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1200">
    <img src={c1} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1 className='c1-heading'>Sysnatiks</h1>
          <p>Crafting Electronic Excellence through Systematic and Naticks Integration</p>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="1200">
    <img src={c2} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
      <h1 className='c1-heading'>Sysnatiks</h1>
      <p>Crafting Electronic Excellence through Systematic and Naticks Integration</p>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="1200"> 
    <img src={c3} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
      <h1 className='c1-heading'>Sysnatiks</h1>
      <p>Crafting Electronic Excellence through Systematic and Naticks Integration</p>
        </div>        
    </div>
    <div class="carousel-item" data-bs-interval="1200">
    <img src={c4} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
      <h1 className='c1-heading'>Sysnatiks</h1>
      <p>Crafting Electronic Excellence through Systematic and Naticks Integration</p>
        </div>        
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
   </>
  )
}
