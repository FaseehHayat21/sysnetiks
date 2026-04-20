import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import service1 from "../../assets/ethics21.jpg";
import service2 from "../../assets/cor_esteem.jpg";
import service3 from "../../assets/excel.jpg";

export default function Services() {
    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const servicesData = [
        {
            id: 1,
            icon: service1,
            title: "Electronic System Design",
            description: "Comprehensive electronic system design services from concept to production, ensuring optimal performance and reliability.",
            features: ["Custom PCB Design", "Embedded Systems", "Hardware Integration"]
        },
        {
            id: 2,
            icon: service2,
            title: "IoT Solutions",
            description: "Cutting-edge Internet of Things solutions that connect your devices and unlock valuable data insights.",
            features: ["Smart Device Integration", "Cloud Connectivity", "Real-time Analytics"]
        },
        {
            id: 3,
            icon: service3,
            title: "Quality Assurance",
            description: "Rigorous testing and quality control processes to ensure your products meet the highest standards.",
            features: ["Automated Testing", "Compliance Certification", "Performance Optimization"]
        },
        {
            id: 4,
            icon: service1,
            title: "Embedded Software",
            description: "Expert embedded software development for microcontrollers and processors across various industries.",
            features: ["Firmware Development", "RTOS Integration", "Driver Development"]
        },
        {
            id: 5,
            icon: service2,
            title: "Prototype Manufacturing",
            description: "Fast and reliable prototype manufacturing services to bring your ideas to life quickly.",
            features: ["3D Printing", "PCB Assembly", "Component Sourcing"]
        },
        {
            id: 6,
            icon: service3,
            title: "Technical Consulting",
            description: "Expert consulting services to guide your electronic product development journey.",
            features: ["Feasibility Studies", "Technology Selection", "Cost Optimization"]
        }
    ];

    return (
        <div className="services-section" id="services">
            <div className="services-container">
                <div className="services-header" data-aos="fade-up">
                    <span className="services-badge">What We Offer</span>
                    <h2 className="services-title">
                        Our Valuable <span className="highlight">Services</span>
                    </h2>
                    <div className="services-divider"></div>
                    <p className="services-subtitle">
                        Comprehensive electronic solutions designed to drive your business success
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div 
                            key={service.id}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-image-wrapper">
                                <img 
                                    src={service.icon} 
                                    alt={service.title} 
                                    className="service-image"
                                />
                                <div className="service-overlay">
                                    <div className="service-number">{String(service.id).padStart(2, '0')}</div>
                                </div>
                            </div>
                            
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                
                                <div className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <span key={idx} className="feature-tag">
                                            <svg viewBox="0 0 20 20" width="14" height="14">
                                                <path d="M16.7 5.3l-8.5 8.5-4.5-4.5-1.4 1.4 5.9 5.9 9.9-9.9z" fill="currentColor"/>
                                            </svg>
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                
                                <button className="service-btn">
                                    Learn More
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}