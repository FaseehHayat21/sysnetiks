import React, { useEffect, useState } from 'react';
import c1 from "../../assets/HomeImages/c1.jpg";
import c2 from "../../assets/HomeImages/c2.jpg";
import c3 from "../../assets/HomeImages/c3.jpg";
import c4 from "../../assets/HomeImages/c4.jpg";
import "./Carousel.css";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExampleDark');
    const handleSlide = (event) => {
      setActiveIndex(event.to);
    };
    
    if (carouselElement) {
      carouselElement.addEventListener('slid.bs.carousel', handleSlide);
      return () => {
        carouselElement.removeEventListener('slid.bs.carousel', handleSlide);
      };
    }
  }, []);

  const carouselItems = [
    { id: 0, img: c1, title: "Sysnatiks", subtitle: "Crafting Electronic Excellence through Systematic and Naticks Integration" },
    { id: 1, img: c2, title: "Sysnatiks", subtitle: "Crafting Electronic Excellence through Systematic and Naticks Integration" },
    { id: 2, img: c3, title: "Sysnatiks", subtitle: "Crafting Electronic Excellence through Systematic and Naticks Integration" },
    { id: 3, img: c4, title: "Sysnatiks", subtitle: "Crafting Electronic Excellence through Systematic and Naticks Integration" }
  ];

  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators custom-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            >
              <span className="indicator-dot"></span>
            </button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="3000"
            >
              <div className="image-overlay"></div>
              <img 
                src={item.img} 
                className="d-block w-100 carousel-image" 
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption custom-caption">
                <div className="caption-content">
                  <h1 className="c1-heading">{item.title}</h1>
                  <div className="title-underline"></div>
                  <p className="c1-subtitle">{item.subtitle}</p>
                  <button className="explore-btn">Explore More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon custom-control-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon custom-control-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}