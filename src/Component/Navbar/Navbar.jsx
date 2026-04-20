import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-background fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-e">
        <div className="brand-container">
          {/* <img src="..." alt="logo" /> */}
          <h2 className='nav-heading'>
            <span className="brand-gradient">Sysnatiks</span>
          </h2>
        </div>
        
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">   
              <a 
                className="nav-link" 
                href="#product" 
                onClick={(e) => handleNavClick(e, 'product')}
              >
                Product
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contactus" 
                onClick={(e) => handleNavClick(e, 'contactus')}
              >
                Contact Us
              </a>
            </li>
          </ul>
          
          <div className="auth-buttons">
            <Link className='nav-link' to="/signup">
              <button className="btn btn-signup" type="button">
                Sign Up
              </button>
            </Link>
            <Link className='nav-link' to="/login">
              <button className="btn btn-login" type="button">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}