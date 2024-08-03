import React, { useState } from 'react';

import "./Business.css"
import image from "../../assets/nrtcmbloackimage.jpg"
export default function Business() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
  return (
    <div className="business-page">
        <div className="b-imae">
            <img className='b-image img-fluid ' src={image} alt="" />
        </div>
        <div className="business-info">
        <div className="accordion" id="accordionExample">
            <h3 className='accord-text'>Accelerate Buiness growth</h3>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button accord-text ${activeIndex === 0 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(0)}
          >
            <span className={`accordion-number ${activeIndex === 0 ? 'active' : ''}`}>1</span><h4 className='accord-text'> How Can NRTC Business Help You</h4>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(1)}
          >
            <span className={`accordion-number ${activeIndex === 1 ? 'active' : ''}`}>2</span> <h4 className='accord-text'> How Can NRTC Business Help You</h4>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(2)}
          >
            <span className={`accordion-number ${activeIndex === 2 ? 'active' : ''}`}>3</span> <h4 className='accord-text'> How Can NRTC Business Help You</h4>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
    </div>
  )
}
