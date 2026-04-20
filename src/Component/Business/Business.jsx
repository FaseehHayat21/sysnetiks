import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Business.css";
import backgroundImage from "../../assets/HomeImages/ctdl.png";

export default function Business() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            id: 1,
            title: "How Can Sysnatiks Help Your Business",
            content: "Sysnatiks provides end-to-end electronic solutions including custom PCB design, embedded systems development, IoT integration, and manufacturing support. Our expert team works closely with you to understand your unique requirements and deliver scalable solutions that drive efficiency and innovation.",
            details: [
                "Custom electronic design & development",
                "Prototype to production support",
                "Quality assurance & testing"
            ]
        },
        {
            id: 2,
            title: "Innovation-Driven Solutions",
            content: "We leverage cutting-edge technology and industry best practices to create innovative solutions that give your business a competitive edge. From AI-powered systems to smart automation, we help you stay ahead of the curve.",
            details: [
                "AI & Machine Learning integration",
                "Smart automation systems",
                "Next-gen technology solutions"
            ]
        },
        {
            id: 3,
            title: "End-to-End Support",
            content: "Our commitment doesn't end with delivery. We provide comprehensive support including training, maintenance, and continuous improvement services to ensure your systems perform optimally throughout their lifecycle.",
            details: [
                "24/7 technical support",
                "Regular maintenance & updates",
                "Training & knowledge transfer"
            ]
        }
    ];

    return (
        <div className="business-page" id="business">
            <div className="business-overlay"></div>
            
            <div className="business-container">
                <div className="business-header" data-aos="fade-up">
                    <span className="business-badge">Why Choose Us</span>
                    <h2 className="business-title">
                        Accelerate Your <span className="highlight">Business Growth</span>
                    </h2>
                    <div className="business-divider"></div>
                    <p className="business-subtitle">
                        Discover how Sysnatiks can transform your electronic systems and drive innovation
                    </p>
                </div>

                <div className="business-content-wrapper">
                    <div className="accordion-wrapper" data-aos="fade-right">
                        <div className="accordion" id="businessAccordion">
                            {accordionData.map((item, index) => (
                                <div key={item.id} className="accordion-item-custom">
                                    <div 
                                        className={`accordion-header-custom ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="accordion-number-wrapper">
                                            <span className={`accordion-number ${activeIndex === index ? 'active' : ''}`}>
                                                {String(item.id).padStart(2, '0')}
                                            </span>
                                            <div className="number-line"></div>
                                        </div>
                                        <div className="accordion-title-wrapper">
                                            <h4 className="accordion-title">{item.title}</h4>
                                            <div className="accordion-icon">
                                                <svg className={`accordion-arrow ${activeIndex === index ? 'rotated' : ''}`} viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                                        <div className="accordion-body-custom">
                                            <p className="accordion-description">{item.content}</p>
                                            <ul className="accordion-details">
                                                {item.details.map((detail, idx) => (
                                                    <li key={idx}>
                                                        <svg className="check-icon" viewBox="0 0 20 20" width="16" height="16">
                                                            <path d="M16.7 5.3l-8.5 8.5-4.5-4.5-1.4 1.4 5.9 5.9 9.9-9.9z" fill="currentColor"/>
                                                        </svg>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="business-stats-wrapper" data-aos="fade-left">
                        <div className="stats-card">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support Available</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Expert Engineers</div>
                            </div>
                        </div>
                        <div className="cta-card">
                            <h5>Ready to Transform Your Business?</h5>
                            <button className="cta-button">Get Started Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}