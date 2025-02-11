import React, { useEffect, useRef } from "react";
import "./Catalog.css";
import mug from '../../assets/images/mug.jpg'; // 

const Catalog = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let position = 0;

    const slide = () => {
      position -= 1;
      if (position < -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
    };

    const interval = setInterval(slide, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="catalog-container">
      {/* Auto-scrolling Slider */}
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <p>🔥 Explore Our Latest Collection 🔥 Explore Our Latest Collection 🔥</p>
        </div>
      </div>

      {/* Heading */}
      <h1 className="catalog-heading">CATALOG</h1>

      {/* Product Grid */}
      <div className="product-grid">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="product-box">
            <img src={mug} alt={`Product ${item}`} /> {}
            <button className="product-button">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
