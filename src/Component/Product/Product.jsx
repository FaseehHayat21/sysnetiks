import React from 'react'
import "./Product.css"
import p1 from "../../assets/img24.jpg"
export default function Product() {
    const generate = ()=>  {
        alert("product")
    }
  return (

    <div className="product-showcase">
        <div className="heading">
            <h2>Products that we are Proud OF</h2>
        </div>
        <div className="prod">
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            </div>
    </div>
  )
}
