import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.css";
import { Link } from "react-router-dom";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlinePerson4 } from "react-icons/md";
import mug from '../../assets/images/mug.jpg';
import pillow from '../../assets/images/pillow.jpg';
import table from '../../assets/images/table.jpg';
import lamp from '../../assets/images/lamp.jpg';
import rug from '../../assets/images/rug.jpg';
import vase from '../../assets/images/vase.jpg';

const Home = () => {
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

  const products = [
    { id: 1, image: mug, name: "Mandala Wall Art", price: "€45.00" },
    { id: 2, image: pillow, name: "Boho Pillow Cover", price: "€25.00" },
    { id: 3, image: table, name: "Yoga Mat with Mandala", price: "€60.00" },
  ];

  const secondRowProducts = [
    { id: 4, image: lamp, name: "Mandala Lamp", price: "€35.00" },
    { id: 5, image: rug, name: "Boho Style Rug", price: "€50.00" },
    { id: 6, image: vase, name: "Handcrafted Vase", price: "€40.00" },
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
          <Link to="/Catalog">All Collections</Link>
          <Link to="/Contact">Contact us for Informations</Link>


        </div>
        <div className="nav-icons">
  <Link to="/Logins">
    <MdOutlinePerson4 color="#000000" size={30} style={{ padding: "10px", cursor: "pointer" }} />
  </Link>
  <Link href="/portfolio">
    <TbBriefcase2 color="#000000" size={30} style={{ padding: "10px", cursor: "pointer" }} />
  </Link>
</div>;
      </div>

      {/* Hero Section */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="swiper-slide">
                <motion.div
                  className="slide-content"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <h2 className="hero-heading">{slide.heading}</h2>
                  <p>{slide.text}</p>
                  <button className="shop-button">Shop Our Store</button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-content">
        <h1>From Home Decor to Digital Art</h1>
        <p>Explore our wide range of products: from cozy home decor and stylish outfits to functional accessories and inspiring digital downloads. Blululi brings mindfulness and beauty to every aspect of your life.</p>
        <span>---</span>
        <h2>Shop our collections</h2>
      </div>

      {/* Product Grid - First Row */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Product Grid - Second Row */}
      <div className="product-grid">
        {secondRowProducts.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div className="vision">
        <h1>Art That Blends Heart and Innovation</h1>
        <p>Our designs combine traditional artistry with modern technology. Each product is thoughtfully created to bring vibrant energy, balance, and joy into your daily routine.</p>
      </div>
    </div>
  );
};

export default Home;
