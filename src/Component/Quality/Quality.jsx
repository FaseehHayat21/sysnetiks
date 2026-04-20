import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import q1 from "../../assets/OHSAS.png";
import q2 from "../../assets/IPC.png";
import q3 from "../../assets/ISO.png";
import q4 from "../../assets/MIL.png";
import "./Quality.css";

export default function Quality() {
    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const qualityData = [
        {
            id: 1,
            img: q1,
            title: "OHSAS Certified",
            description: "Occupational Health and Safety Management",
            standard: "ISO 45001:2018"
        },
        {
            id: 2,
            img: q2,
            title: "IPC Compliance",
            description: "Electronic Manufacturing Standards",
            standard: "IPC-A-610"
        },
        {
            id: 3,
            img: q3,
            title: "ISO Certified",
            description: "International Quality Management",
            standard: "ISO 9001:2015"
        },
        {
            id: 4,
            img: q4,
            title: "MIL-SPEC Compliant",
            description: "Military Grade Standards",
            standard: "MIL-STD-883"
        }
    ];

    return (
        <div className="quality-section" id="quality">
            <div className="quality-container">
                <div className="quality-header" data-aos="fade-up">
                    <span className="quality-badge">Certifications & Standards</span>
                    <h2 className="quality-title">
                        Our <span className="highlight">Quality Standards</span>
                    </h2>
                    <div className="quality-divider"></div>
                    <p className="quality-subtitle">
                        Ensuring safety, reliability, and excellence in every product and service we deliver
                    </p>
                </div>

                <div className="quality-grid">
                    {qualityData.map((item, index) => (
                        <div 
                            key={item.id}
                            className="quality-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="quality-card-inner">
                                <div className="quality-icon-wrapper">
                                    <div className="quality-icon-bg"></div>
                                    <img 
                                        className='quality-image' 
                                        src={item.img} 
                                        alt={item.title}
                                    />
                                    <div className="quality-shine"></div>
                                </div>
                                <div className="quality-info">
                                    <h3 className="quality-card-title">{item.title}</h3>
                                    <p className="quality-card-desc">{item.description}</p>
                                    <div className="quality-standard-badge">
                                        <span className="standard-label">Standard:</span>
                                        <span className="standard-value">{item.standard}</span>
                                    </div>
                                </div>
                                <div className="quality-hover-effect">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="quality-footer" data-aos="fade-up">
                    <div className="quality-stats">
                        <div className="stat">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Quality Commitment</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Compliance Monitoring</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}