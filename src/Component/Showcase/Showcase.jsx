import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Showcase.css";
import vision from "../../assets/vision1.png";
import mision from "../../assets/mission11.png";
import quality from "../../assets/quality4.png";

export default function Showcase() {
    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const showcaseData = [
        {
            id: 1,
            img: vision,
            title: "Our Vision",
            description: "To be a global leader in electronic innovation, delivering cutting-edge solutions that transform how the world connects and communicates.",
            delay: 0
        },
        {
            id: 2,
            img: mision,
            title: "Our Mission",
            description: "To empower businesses with intelligent electronic systems through relentless innovation, quality excellence, and customer-centric solutions.",
            delay: 200
        },
        {
            id: 3,
            img: quality,
            title: "Quality Commitment",
            description: "We uphold uncompromising quality standards in every product, ensuring reliability, durability, and performance that exceeds expectations.",
            delay: 400
        }
    ];

    return (
        <>
            <div className="showcase-container">
                <div className="showcase-header" data-aos="fade-up">
                    <h2 className="section-title">Why Choose Sysnatiks</h2>
                    <div className="section-underline"></div>
                    <p className="section-subtitle">
                        Driving excellence through innovation, mission-driven approach, and unwavering quality
                    </p>
                </div>

                <div className="showcase-goals">
                    {showcaseData.map((item, index) => (
                        <div 
                            key={item.id}
                            className="showcase-card"
                            data-aos="fade-up"
                            data-aos-delay={item.delay}
                        >
                            <div className="card-icon-wrapper">
                                <div className="icon-background"></div>
                                <img src={item.img} alt={item.title} className="card-icon" />
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-underline"></div>
                            <p className="card-description">{item.description}</p>
                            <div className="card-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}