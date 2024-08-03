import React from 'react'
import image from "../../assets/slide_img9.jpg"
import image1 from "../../assets/slide_img89.jpg"
import "./Carousel.css"
export default function Carousel() {
  return (
   <>
   {/* <div id="carouselExampleInterval"  class="carousel carousel-dark slide" data-bs-ride="carousel">
   <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>    
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
          <h1>First Slide</h1>
          <p>This is the first slide description.</p>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100 h-screen" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
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
 */}

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
    <div class="carousel-item active" data-bs-interval="1000">
    <img src={image} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
    <img src={image1} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>
    </div>
    <div class="carousel-item">
    <img src={image} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>        
    </div>
    <div class="carousel-item">
    <img src={image1} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>        
    </div>
    <div class="carousel-item">
    <img src={image} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
        </div>        
    </div>
    <div class="carousel-item">
    <img src={image1} class="d-block w-100 h-screen img-fluid" alt="..."/>
      <div class="carousel-caption">
          <h1>Third Slide</h1>
          <p>This is the third slide description.</p>
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
