import React, { useEffect, useRef, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Intro.css";

export default function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="intro-section" id="intro">
      <div className="intro-container">
        <div className="intro-header" data-aos="fade-up">
          <span className="intro-badge">Get to Know Us</span>
          <h2 className="intro-title">
            Welcome to <span className="highlight">Sysnatiks</span>
          </h2>
          <div className="intro-divider"></div>
          <p className="intro-subtitle">
            Discover our journey of innovation and excellence in electronic solutions
          </p>
        </div>

        <div className="intro-content">
          <div className="intro-video-wrapper" data-aos="fade-right">
            <div className="video-container">
              <video
                ref={videoRef}
                className="intro-video"
                poster="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=450&fit=crop"
                onClick={handlePlayPause}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className={`video-overlay ${isPlaying ? 'hidden' : ''}`}>
                <button className="play-button" onClick={handlePlayPause}>
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.6)"/>
                    <path d="M10 8l6 4-6 4V8z" fill="white"/>
                  </svg>
                </button>
              </div>
              
              <div className="video-controls">
                <button className="control-btn" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <rect x="6" y="4" width="4" height="16" fill="white"/>
                      <rect x="14" y="4" width="4" height="16" fill="white"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M8 5v14l11-7z" fill="white"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="intro-text-wrapper" data-aos="fade-left">
            <div className="text-content">
              <h3 className="text-title">Innovating Tomorrow's Electronics Today</h3>
              <p className="text-description">
                At Sysnatiks, we're revolutionizing the electronic systems landscape through cutting-edge 
                technology and unwavering commitment to quality. Our expertise spans across embedded systems, 
                IoT solutions, and custom electronic design that powers businesses worldwide.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#3168a6"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Industry Expertise</h4>
                    <p>Years of experience in electronic systems integration</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#3168a6"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Innovation First</h4>
                    <p>Cutting-edge solutions for modern challenges</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#3168a6"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Quality Assured</h4>
                    <p>Rigorous testing and quality control processes</p>
                  </div>
                </div>
              </div>
              
              <button className="learn-more-btn">
                Learn More About Us
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}