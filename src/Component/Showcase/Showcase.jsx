import React, {useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Showcase.css"
import vision from "../../assets/vision1.png"
import mision from "../../assets/mission11.png"
import quality from "../../assets/quality4.png"

export default function Showcase() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
  return (
    <>
        <div className="showcase-goals">
            <div className="vision" data-aos="fade-right">
                <img src={vision} alt="" />
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quia ipsa sint illo nisi placeat aliquid neque atque tenetur.</p>
            </div>
            <div className="vision" data-aos="fade-right">
                <img src={mision} alt="" />
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quia ipsa sint illo nisi placeat aliquid neque atque tenetur.</p>
            </div>
            <div className="vision" data-aos="fade-right">
                <img src={quality} alt="" />
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quia ipsa sint illo nisi placeat aliquid neque atque tenetur.</p>
            </div>
        </div>
    </>
  )
}
