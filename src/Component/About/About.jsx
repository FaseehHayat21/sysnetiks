import React, {useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import aboutimage from "../../assets/vision1.png"
import "./About.css"
export default function About() {
    useEffect(()=> {
        Aos.init({duration: 1000});
    })
  return (
        <>
            <div className="about-page">
                <div className="about">
                    <div className="about-content" data-aos="fade-right">
                        <div className='content'>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate, optio iure quam error consequuntur facilis quo natus? Qui, architecto! Placeat deserunt incidunt beatae nulla reiciendis libero dolor fugiat impedit?</p>
                        </div>
                        <div className='a-btn'>
                        <button className='a-btn'> About US</button>
                        </div>
                    </div>
                    <div className="about-image" data-aos="fade-down">
                        <img className='a-image responsive-image img-fluid' src={aboutimage} alt="" />
                    </div>
                    
                </div>
            </div>
        </>
  )
}
