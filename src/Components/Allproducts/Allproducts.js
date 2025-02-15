import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlinePerson4 } from "react-icons/md";
import mug from "../../assets/images/mug.jpg";
import pillow from "../../assets/images/pillow.jpg";
import table from "../../assets/images/table.jpg";
import lamp from "../../assets/images/lamp.jpg";
import "./Allproducts.css"; // Import the CSS file
import bluet from "../../assets/images/bluet.jpg"; // Default image
import whitet from "../../assets/images/whitet.jpg"; // Image on hover
import redImg from "../../assets/images/red.jpg"; // Red color image
import blueImg from "../../assets/images/blue.jpg"; // Blue color image
import greenImg from "../../assets/images/green.jpg"; // Green color image

const Allproducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImage, setCurrentImage] = useState(bluet);

  const products = [
    { id: 1, image: mug, name: "Mandala Wall Art", price: "€45.00" },
    { id: 2, image: pillow, name: "Boho Pillow Cover", price: "€25.00" },
    { id: 3, image: table, name: "Yoga Mat with Mandala", price: "€60.00" },
    { id: 4, image: lamp, name: "Mandala Lamp", price: "€35.00" },
  ];

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Link to="/catalogs">Online Catalogs</Link>
          <Link to="/Allproducts">All Products</Link>
          <Link to="/Allcollection">All Collections</Link>
          <Link to="/Logins">Login</Link>
        </div>
        <div className="nav-icons">
          <MdOutlinePerson4 size={30} style={{ padding: "10px" }} />
          <TbBriefcase2 size={30} style={{ padding: "10px" }} />
        </div>
      </div>

      {/* Search Box */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />
      </div>

      {/* Product Box */}
      <Link to="/ProductDetails" className="product-link">
        <div className="product-box">
          {/* Product Image */}
          <div
            className="image-container"
            onMouseEnter={() => setCurrentImage(whitet)}
            onMouseLeave={() => setCurrentImage(bluet)}
          >
            <img src={currentImage} alt="Product" />
          </div>

          {/* Product Info */}
          <h3>Aluminum Love</h3>
          <p>Type: Premium Metal</p>
          <p>Rs. 1999</p>

          {/* Color Selection */}
          <div className="color-options">
            <div
              className="color-circle red"
              onClick={() => setCurrentImage(redImg)}
            ></div>
            <div
              className="color-circle blue"
              onClick={() => setCurrentImage(blueImg)}
            ></div>
            <div
              className="color-circle green"
              onClick={() => setCurrentImage(greenImg)}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Allproducts;
