import React, { useRef, useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./ContactUs.css";
import contactlogo from "../../assets/mail.png";
import emailjs from '@emailjs/browser';
import { IoIosCall, IoMdMail, IoMdSend } from "react-icons/io";
import { FaLocationDot, FaClock, FaEnvelope } from "react-icons/fa6";
import { HiUser, HiOutlineMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactUs() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusType, setStatusType] = useState('');

  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    emailjs
      .sendForm('service_ofg8hj7', 'template_rha4jkl', form.current, {
        publicKey: 'X_tpTc1ZeOlRDRjT8',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset();
          setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
          setStatusType('success');
          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage('Failed to send message. Please try again later.');
          setStatusType('error');
          setTimeout(() => {
            setStatusMessage('');
            setStatusType('');
          }, 5000);
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-section" id="contactus">
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-up">
          <div className="contact-badge">Get In Touch</div>
          <h2 className="contact-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-info-side" data-aos="fade-right">
            <div className="info-card">
              <div className="info-header">
                <img className='contact-logo' src={contactlogo} alt="Contact" />
                <h3>Contact Information</h3>
              </div>
              
              <div className="info-details">
                <div className="info-item">
                  <div className="info-icon">
                    <FaLocationDot />
                  </div>
                  <div className="info-text">
                    <h4>Visit Us</h4>
                    <p>PAF Complex E9, Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <IoIosCall />
                  </div>
                  <div className="info-text">
                    <h4>Call Us</h4>
                    <p>+92 51 1234567</p>
                    <p className="small-text">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <IoMdMail />
                  </div>
                  <div className="info-text">
                    <h4>Email Us</h4>
                    <p>info@sysnatiks.com</p>
                    <p className="small-text">support@sysnatiks.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="small-text">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-12.137c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-side" data-aos="fade-left">
            <div className="form-card">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>We'll get back to you within 24 hours</p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="input-group">
                  <div className="input-icon">
                    <HiUser />
                  </div>
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <HiOutlineMail />
                  </div>
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>

                <div className="input-group">
                  <div className="input-icon">
                    <MdMessage />
                  </div>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <IoMdSend />
                      Send Message
                    </>
                  )}
                </button>

                {statusMessage && (
                  <div className={`status-message ${statusType}`}>
                    {statusType === 'success' ? <FaCheckCircle /> : <FaEnvelope />}
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}