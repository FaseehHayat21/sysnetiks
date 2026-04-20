import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import logo from "../../assets/vision1.png"; // Replace with your actual logo

export default function Footer() {
    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", link: "#home" },
        { name: "About Us", link: "#about" },
        { name: "Products", link: "#product" },
        { name: "Services", link: "#services" },
        { name: "Contact Us", link: "#contactus" }
    ];

    const services = [
        { name: "Electronic System Design", link: "#" },
        { name: "IoT Solutions", link: "#" },
        { name: "Embedded Software", link: "#" },
        { name: "PCB Manufacturing", link: "#" },
        { name: "Technical Consulting", link: "#" }
    ];

    const products = [
        { name: "Software Defined Radios", link: "#" },
        { name: "Embedded Computing", link: "#" },
        { name: "Power Supply Units", link: "#" },
        { name: "IoT Gateways", link: "#" },
        { name: "RF Amplifiers", link: "#" }
    ];

    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section company-section">
                        <div className="footer-logo">
                            <img src={logo} alt="Sysnatiks Logo" className="logo-img" />
                            <h3 className="logo-text">Sysnatiks</h3>
                        </div>
                        <p className="company-description">
                            Crafting Electronic Excellence through Systematic Integration. 
                            We deliver cutting-edge electronic solutions that empower businesses 
                            and drive innovation worldwide.
                        </p>
                        <div className="certification-badges">
                            <span className="cert-badge">ISO 9001:2015</span>
                            <span className="cert-badge">IPC Certified</span>
                            <span className="cert-badge">MIL-SPEC</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="footer-link">
                                        <span className="link-arrow">→</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            {services.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="footer-link">
                                        <span className="link-arrow">→</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h4 className="footer-title">Our Products</h4>
                        <ul className="footer-links">
                            {products.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="footer-link">
                                        <span className="link-arrow">→</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section contact-section">
                        <h4 className="footer-title">Get In Touch</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                                </svg>
                                <span>PAF Complex E9, Islamabad, Pakistan</span>
                            </div>
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                                </svg>
                                <span>+92 51 1234567</span>
                            </div>
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                                </svg>
                                <span>info@sysnatiks.com</span>
                            </div>
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                                </svg>
                                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="newsletter-section" data-aos="fade-up">
                    <div className="newsletter-content">
                        <h4 className="newsletter-title">Subscribe to Our Newsletter</h4>
                        <p className="newsletter-text">
                            Stay updated with the latest news, products, and innovations from Sysnatiks.
                        </p>
                        <form className="newsletter-form">
                            <div className="newsletter-input-group">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    Subscribe
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="footer-bottom">
                    <div className="social-media">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-12.137c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div className="copyright">
                        <p>&copy; {currentYear} Sysnatiks. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="#">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#">Terms of Service</a>
                            <span className="separator">|</span>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button 
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill="currentColor"/>
                </svg>
            </button>
        </footer>
    );
}