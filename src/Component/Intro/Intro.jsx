import React, {useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Intro.css"
export default function Intro() {
  useEffect(()=> {
    Aos.init({duration: 1000});
})

  return (
    <>
     <div className="container intro mt-5" >
      <div className="row" data-aos="fade-right">
        <h3>Intro</h3>
        <div className="col-md-6" data-aos="fade-right">
          <video
            width="100%"
            controls
            poster="https://via.placeholder.com/800x400.png?text=Video+Thumbnail" // Replace with your video thumbnail
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-up">
          <h1>Your Heading</h1>
          <p>
            Your paragraph text goes here. This is where you can add more information or description about the video or any other content you want to share with your users.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
