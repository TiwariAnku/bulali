import React from "react";
import "./Allcollection.css"; // Create this file for styling
import { Link } from "react-router-dom";
import { TbBriefcase2 } from "react-icons/tb";
import { MdOutlinePerson4 } from "react-icons/md";
import allproduct from "../../assets/images/allproduct.jpg"; // Replace with your image path
import mug2 from "../../assets/mug2.jpg"; // Replace with your image path
import animals from "../../assets/images/animals.jpg";
import Anni from "../../assets/images/Anni.jpg";
import appron from "../../assets/images/appron.jpg";
const Allcollection = () => {
    return (
        <div className="allcollection-container">
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
            <div className="allcollection-container1">
                <h1>All Collections</h1>
            </div>

            <div className="collection-grid">
                <div className="collection-box">
                    <img src={mug2} alt="Category 1" />
                    <p>10th Anniversary</p>
                </div>
                <div className="collection-box">
                    <img src={allproduct} alt="Category 2" />
                    <p>All product</p>
                </div>
                <div className="collection-box">
                    <img src={animals} alt="Category 3" />
                    <p>Animals Degine</p>
                </div>
            </div>

            {/* Second row */}
            <div className="collection-grid">
                <div className="collection-box">
                    <img src={Anni} alt="Category 4" />
                    <p>Category 4</p>
                </div>
                <div className="collection-box">
                    <img src={appron} alt="Category 5" />
                    <p>Category 5</p>
                </div>
                <div className="collection-box">
                    <img src={allproduct} alt="Category 6" />
                    <p>Category 6</p>
                </div>
            </div>

        </div>


    );
};

export default Allcollection;
