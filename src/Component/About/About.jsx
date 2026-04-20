import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import aboutimage from "../../assets/vision1.png";
import "./About.css";

export default function About() {
    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <>
            <div className="about-page" id="about">
                <div className="about-container">
                    <div className="about-content" data-aos="fade-right">
                        <div className='content-wrapper'>
                            <div className="section-badge">Who We Are</div>
                            <h3 className="about-title">About <span className="highlight">Sysnatiks</span></h3>
                            <div className="title-divider"></div>
                            <p className="about-description">
                                At Sysnatiks, we are pioneers in electronic innovation, dedicated to crafting cutting-edge 
                                solutions that drive the future of technology. With years of expertise and a passion for excellence, 
                                we deliver systematic integration that empowers businesses worldwide.
                            </p>
                            <p className="about-description second">
                                Our commitment to quality, innovation, and customer satisfaction sets us apart as a trusted 
                                partner in the electronics industry. We believe in transforming ideas into reality through 
                                precision engineering and creative problem-solving.
                            </p>
                            <div className='about-buttons'>
                                <button className='btn-primary'>Learn More</button>
                                <button className='btn-outline'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-image-wrapper" data-aos="fade-left">
                        <div className="image-container">
                            <div className="image-backdrop"></div>
                            <img 
                                className='about-image responsive-image' 
                                src={aboutimage} 
                                alt="About Sysnatiks - Electronic Innovation" 
                            />
                            <div className="image-overlay-effect"></div>
                            <div className="floating-card experience-card">
                                <div className="card-content">
                                    <span className="number">10+</span>
                                    <span className="label">Years of Excellence</span>
                                </div>
                            </div>
                            <div className="floating-card projects-card">
                                <div className="card-content">
                                    <span className="number">500+</span>
                                    <span className="label">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}