import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Logins.css"; // Import the CSS file

const Logins = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        
        {/* Logo */}
        <img
          src="https://blululi.com/cdn/shop/files/Logo_blululi_horizontal-2.png?v=1731863846&width=140"
          alt="Logo"
          className="logo"
        />

        {/* Login Heading */}
        <h2 className="login-title">Log in</h2>

        {/* Instructions */}
        <p className="login-instructions">
          Enter your email and we'll send you a login code
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        {/* Continue Button */}
        <button
          className={`login-button ${email ? "enabled" : "disabled"}`}
          disabled={!email}
        >
          Continue
        </button>

        {/* Privacy Policy Link */}
        <p className="privacy-link">
          <Link to="/privacy">Privacy</Link>
        </p>
        
      </div>
    </div>
  );
};

export default Logins;
