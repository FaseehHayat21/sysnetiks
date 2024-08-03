import React from 'react'
import q1 from "../../assets/OHSAS.png"
import q2 from "../../assets/IPC.png"
import q3 from "../../assets/ISO.png"
import q4 from "../../assets/MIL.png"
import "./Quality.css"
export default function Quality() {
  return (
    <>
    <div className="quality-page">
        <div className="quality-heading">
            <h2>Our Quality Standards</h2>
            <h4>Ensuring safety and reliability of the products and services</h4>
        </div>
        <div className="quality-standard">
            <div className="quality">
                <img className='q-img' src={q1} alt="" />
            </div>
            <div className="quality">
                <img className='q-img' src={q2} alt="" />
            </div>
            <div className="quality">
                <img className='q-img' src={q3} alt="" />
            </div>
            <div className="quality">
                <img className='q-img' src={q4} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
