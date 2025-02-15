import React, { useState } from "react";
import "./productdetails.css";
import { FaFacebook, FaPinterest, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlinePerson4 } from "react-icons/md";

// Sample images
import bluet from "../../assets/images/bluet.jpg";  
import whitet from "../../assets/images/whitet.jpg";  
import redImg from "../../assets/images/red.jpg";  
import blueImg from "../../assets/images/blue.jpg"; 
import greenImg from "../../assets/images/green.jpg";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(bluet);
  const [quantity, setQuantity] = useState(1);
 
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  return ( 
    <div className="carousel-page">
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">
          <img
            src="https://blululi.com/cdn/shop/files/Logo_blululi_horizontal-2.png?v=1731863846&width=140"
            alt="logo"
          />
        </h1>
        <div className="nav-links">
          <Link to="/Allproducts">All Products</Link>
          <Link to="/Allcollection">All Collections</Link>
          <Link to="/Contact">Contact us </Link>
        </div>
        <div className="nav-icons">
          <Link to="/Logins">
            <MdOutlinePerson4 color="#000000" size={30} style={{ padding: "10px", cursor: "pointer" }} />
          </Link>
          <Link to="/portfolio">
            <TbBriefcase2 color="#000000" size={30} style={{ padding: "10px", cursor: "pointer" }} />
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        {/* Left Side - Image Gallery */}
        <div className="product-container1">
          <div className="image-section">
            <div className="thumbnail-slider">
              {[bluet, whitet, blueImg].map((img, index) => (
                <img key={index} src={img} alt={`Thumbnail ${index + 1}`} onClick={() => setMainImage(img)} />
              ))}
            </div>
            <div className="main-image">
              <div className="zoom-container">
                <img src={mainImage} alt="Main Product" />
                <div className="zoom-box"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="product-container">
          <div className="info-section">
            <h1>Aluminum Love</h1>

            {/* Social Media Icons */}
            <div className="social-icons">
              <FaFacebook size={20} />
              <FaPinterest size={20} />
              <FaEnvelope size={20} />
            </div>

            <hr />

            {/* Dropdowns for Available Options and Size */}
            <div className="dropdowns">
              <label>Available Options:</label>
              <select>
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>

              <label>Size:</label>
              <select>
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <label>Color:</label>
              <div className="color-options">
                <div className="color-circle red" onClick={() => setMainImage(redImg)}></div>
                <div className="color-circle blue" onClick={() => setMainImage(blueImg)}></div>
                <div className="color-circle green" onClick={() => setMainImage(greenImg)}></div>
              </div>
            </div>

            {/* Price & Quantity */}
            <h2>Rs. 1999</h2>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <p className="delivery-info">US Delivery Time: 2-9 business days</p>

            {/* Buttons */}
            <div className="buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="gpay-button"></button>
            </div>

            <button className="more-payment">More Payment Options</button>

            <button className="wishlist">
              <FaHeart /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
        {/* Estimate Shipping Section */}
        <div className="shipping-section">
              <h3>Estimate Shipping</h3>
              <div className="shipping-form">
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  <option value="UK">United Kingdom</option>
                </select>

                <select value={province} onChange={(e) => setProvince(e.target.value)}>
                  <option value="">Province</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>

                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  value={zipCode} 
                  onChange={(e) => setZipCode(e.target.value)} 
                />
              </div>
              <button className="estimate-btn">Estimate</button>

              <hr />

              <Link to="/refund-policy" className="refund-link">Refund Policy</Link>
            </div>
          </div>
        
    
  );
};

export default ProductDetails;
