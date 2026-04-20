import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Product.css";
import p1 from "../../assets/img24.jpg";
import p2 from "../../assets/Product/ACAST_Avcs/SDR.jpg";

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        Aos.init({ 
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const productsData = [
        {
            id: 1,
            image: p2,
            title: "Software Defined Radios",
            category: "Communication Systems",
            description: "Advanced SDR solutions for flexible and reliable communication",
            specs: ["Frequency Range: 2MHz-6GHz", "Bandwidth: Up to 100MHz", "FPGA-based processing"]
        },
        {
            id: 2,
            image: p1,
            title: "Embedded Computing Modules",
            category: "Industrial Computing",
            description: "High-performance embedded computing solutions for demanding applications",
            specs: ["ARM/x86 Architecture", "Industrial Grade", "Extended Temperature Range"]
        },
        {
            id: 3,
            image: p1,
            title: "Power Supply Units",
            category: "Power Electronics",
            description: "Reliable and efficient power conversion solutions",
            specs: ["Input: 85-265VAC", "Output: Multiple Rails", "Efficiency: 90%+"]
        },
        {
            id: 4,
            image: p1,
            title: "IoT Gateways",
            category: "IoT Solutions",
            description: "Smart gateway solutions for industrial IoT applications",
            specs: ["Multiple Connectivity", "Edge Computing", "Cloud Integration"]
        },
        {
            id: 5,
            image: p1,
            title: "RF Amplifiers",
            category: "RF Solutions",
            description: "High-power RF amplifiers for communication systems",
            specs: ["Frequency: 1MHz-6GHz", "Gain: Up to 50dB", "High Linearity"]
        },
        {
            id: 6,
            image: p1,
            title: "Custom PCBs",
            category: "Hardware Design",
            description: "Custom PCB design and manufacturing services",
            specs: ["Up to 20 Layers", "HDI Technology", "Quick Turnaround"]
        }
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        // You can replace this with a modal or navigation
        alert(`Viewing: ${product.title}\nCategory: ${product.category}`);
    };

    return (
        <div className="product-section" id="product">
            <div className="product-container">
                <div className="product-header" data-aos="fade-up">
                    <span className="product-badge">Our Portfolio</span>
                    <h2 className="product-title">
                        Products That We're <span className="highlight">Proud Of</span>
                    </h2>
                    <div className="product-divider"></div>
                    <p className="product-subtitle">
                        Cutting-edge electronic solutions engineered for excellence and reliability
                    </p>
                </div>

                <div className="product-grid">
                    {productsData.map((product, index) => (
                        <div 
                            key={product.id}
                            className="product-card-wrapper"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onClick={() => handleProductClick(product)}
                        >
                            <div className="product-card">
                                <div className="product-image-wrapper">
                                    <img 
                                        className='product-image' 
                                        src={product.image} 
                                        alt={product.title}
                                    />
                                    <div className="product-overlay">
                                        <div className="product-category">{product.category}</div>
                                        <button className="product-view-btn">
                                            View Details
                                            <svg viewBox="0 0 24 24" width="18" height="18">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="product-info">
                                    <h3 className="product-card-title">{product.title}</h3>
                                    <p className="product-card-desc">{product.description}</p>
                                    
                                    <div className="product-specs">
                                        {product.specs.map((spec, idx) => (
                                            <span key={idx} className="spec-tag">
                                                <svg viewBox="0 0 20 20" width="12" height="12">
                                                    <circle cx="10" cy="10" r="4" fill="currentColor"/>
                                                </svg>
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="product-card-footer">
                                        <span className="learn-more">Learn More →</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="product-cta" data-aos="fade-up">
                    <button className="view-all-btn">
                        View All Products
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}