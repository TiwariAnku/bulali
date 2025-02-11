import { useState } from "react";
import "./Fotter.css"; // Import the CSS file

const Fotter = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("USA");

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h2>About Blululi</h2>
          <ul>
            <li><a href="#">Who is Camilla, the artist behind Blululi</a></li>
            <li><a href="#">How Mandalas are made?</a></li>
            <li><a href="#">Blog Blululi | Behind the scenes</a></li>
            <li><a href="#">Blog | News</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="follow-btn">Follow</button>
        </div>

        {/* Center Section (Signup) */}
        <div className="footer-section footer-center">
          <h2>Sign up and save</h2>
          <p>Enter your email</p>
          <input type="email" placeholder="Your email" className="email-input" />
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h2>Policies</h2>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <p className="thank-you-msg">
            🌸✨ Thank you for supporting my passion and art. Every piece you choose is a step toward a calmer, more colorful world.
          </p>
        </div>
      </div>

      {/* Bottom Section (Language & Country) */}
      <div className="footer-bottom">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="dropdown">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>

        <select value={country} onChange={(e) => setCountry(e.target.value)} className="dropdown">
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
          <option>Australia</option>
        </select>
      </div>
    </footer>
  );
};

export default Fotter;
