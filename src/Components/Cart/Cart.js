import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePerson4 } from "react-icons/md";
import { TbBriefcase2 } from "react-icons/tb";
import "./Cart.css";
import whitet from "../../assets/images/whitet.jpg";
import bluet from "../../assets/images/bluet.jpg";  
import redImg from "../../assets/images/red.jpg";  
import blueImg from "../../assets/images/blue.jpg"; 
import greenImg from "../../assets/images/green.jpg";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 4700;
  const totalPrice = (price * quantity).toFixed(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = () => {
    alert("Item removed from cart.");
  };

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
          <Link to="/Contact">Contact us</Link>
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

      {/* Cart Header */}
      <div className="cart-header">
        <h2>My Cart</h2>
        <p className="free-shipping">You are eligible for free shipping!</p>
      </div>

      {/* Cart Layout */}
      <div className="cart-layout">
        <div className="cart-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-details">
                  <img src={whitet} alt="Sweatshirt" />
                  <div>
                    <p className="product-title">
                      Handmade Mandala Design Unisex Sweatshirt - 10 Years Strong - M
                      / Carolina Blue
                    </p>
                    <p className="price">Rs. {price.toFixed(2)}</p>
                  </div>
                </td>
                <td className="quantity">
                  <button className="decrease" onClick={decreaseQuantity}>−</button>
                  <input type="text" value={quantity} readOnly />
                  <button className="increase" onClick={increaseQuantity}>+</button>
                  <p className="remove" onClick={removeItem}>Remove</p>
                </td>
                <td className="total-price">Rs. {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Price Box on the Right */}
        <div className="total-box">
          <h3>Total</h3>
          <p className="total-amount">Rs. {totalPrice}</p>
          <p className="tax-info">
            Tax included. <span className="shipping-link">Shipping</span> calculated at checkout.
          </p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>

      {/* Complete Your Cart Section */}
      <div className="complete-cart">
        <h2>Complete your cart</h2>
        <div className="product-recommendations">
          <div className="product-card">
            <img src={bluet} alt="Product 1" />
            <p>Mandala Art Hand-Drawn Tote Bag (AOP)</p>
            <p className="price">From Rs. 1,400.00</p>
            <button className="add-to-cart">Choose options</button>
          </div>

          <div className="product-card">
            <span className="discount-badge">Save 20%</span>
            <img src={blueImg} alt="Product 2" />
            <p>Green Invoice Template for Small Businesses</p>
            <p className="price">Rs. 800.00 <span className="old-price">Rs. 1,000.00</span></p>
            <button className="add-to-cart">Add to cart</button>
          </div>

          <div className="product-card">
            <img src={greenImg} alt="Product 3" />
            <p>Blululi Versatile Weekly Planners - A4</p>
            <p className="price">Rs. 300.00</p>
            <button className="add-to-cart">Add to cart</button>
          </div>

          {/* <div className="product-card">
            <img src={whitet} alt="Product 4" />
            <p>Zipper Wallet - Rainbow Mandala Art</p>
            <p className="price">Rs. 1,800.00</p>
            <button className="add-to-cart">Add to cart</button>
          </div> */}
        </div>
      </div>

      {/* Recently Viewed Section */}
      <div className="recently-viewed">
        <h2>Recently viewed</h2>
        <div className="product-recommendations">
          <div className="product-card">
            <img src={redImg} alt="Recently Viewed 1" />
            <p>Mandala Art Hand-Drawn Tote Bag (AOP)</p>
            <p className="price">From Rs. 1,400.00</p>
          </div>
          <div className="product-card">
            <img src={blueImg} alt="Recently Viewed 2" />
            <p>1 Year Wedding Anniversary Crewneck Sweatshirt</p>
            <p className="price">From Rs. 4,500.00</p>
          </div>
          <div className="product-card">
            <img src={greenImg} alt="Recently Viewed 3" />
            <p>Handmade Mandala Design Unisex Sweatshirt</p>
            <p className="price">From Rs. 4,500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
