import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePerson4 } from "react-icons/md";
import { TbBriefcase2 } from "react-icons/tb";
import "./Contact.css";
import ship from "../../assets/images/ship.jpg";
const Contact = () => {
  const slides = [
    {
      id: 1,
      image: "https://blululi.com/cdn/shop/files/Untitled_design-3.png?v=1733172194&width=1920",
      heading: "CALM IS NOT ACHIEVED, IT IS REVEALED",
      text: "Each mandala is hand-drawn and colorized with an innovative digital method, transforming beauty into practical everyday objects.",
    },
    {
      id: 2,
      image: "https://blululi.com/cdn/shop/files/Screenshot_2025-02-03_at_01.07.42.png?v=1738541280&width=1920",
      heading: "EXPLORE OUR UNIQUE COLLECTIONS",
      text: "Transform your spaces with vibrant mandalas and art pieces designed to elevate your everyday life.",
    },
    {
      id: 3,
      image: "https://blululi.com/cdn/shop/files/Mandalas_Drawn_by_Hand.jpg?v=1738541468&width=1920",
      heading: "FREE SHIPPING AVAILABLE",
      text: "Enjoy free shipping on orders over €75! We also offer international shipping for our global customers.",
    },
  ];

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
          <Link to="/Catalogs">Online Catalogs</Link>
          <Link to="/Allproducts">All Products</Link>
          <Link to="/Allcollection">All Collections</Link>
          <Link to="/Contact">Contact us for Information</Link>
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

      <div className="contact-container">
        <img
          src="https://blululi.com/cdn/shop/files/Logo_blululi_horizontal-2.png?v=1731863846&width=140"
          alt="logo"
        />
        <h2>Contact</h2>
        <p>
          Have you visited my e-commerce store and are interested in one of my products or services but still<br />  
          have some doubts? I’d love to hear from you and help clarify anything you need. 
          Don’t miss the chance to own <br /> one of my unique creations, made with love and care, now available in both the Italian and international markets.
        </p>

        <div className="form-container">
          <input type="text" placeholder="Enter your name" className="input-box" />
          <input type="email" placeholder="Enter your email" className="input-box" />
          <textarea placeholder="Enter your message" className="message-box"></textarea>
        </div>
        <button className="send-button">Send Message</button>
      </div>

      <div className="additional-info">
          <div className="info-line">
            <div className="info-item">
              <img src={ship} alt="Easy Return" className="info-logo" />
              <p><strong>Free Shipping</strong></p>
            </div>
            <div className="info-item">
              <img src={ship} alt="Lifetime Plating" className="info-logo" />
              <p><strong>Satisfied or refunded</strong></p>
            </div>
          </div>

          <div className="info-line">
            <div className="info-item">
              <img src={ship} alt="92.5 Pure Silver" className="info-logo" />
              <p><strong>Top-notch support</strong></p>
            </div>
            <div className="info-item">
              <img src={ship} alt="Cash on Delivery" className="info-logo" />
              <p><strong>Secure payments</strong></p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
