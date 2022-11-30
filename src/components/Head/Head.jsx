import "./Head.scss";
import backgroundImage from "../../../public/eagle.jpg";

import React from "react";
import Navbar from "../Navbar/Navbar";

const Head = () => {
    return (
        <div className="head" id="#head">
            <Navbar />
            <h2>Creative Template</h2>
            <h1>WELCOME TO MOGO</h1>
            <div className="hr"></div>
            <a to="/" className="flat-button">
                Learn More
            </a>
            <div className="head-section">
                <div className="section-div">
                    <h3><span>01</span> INTRO</h3>
                </div>
                <div className="section-div">
                <h3><span>02</span> WORK</h3>

                </div>
                <div className="section-div">
                <h3><span>03</span> ABOUT</h3>
                </div>
                <div className="section-div">
                <h3><span>04</span> CONTACT</h3>
                </div>
            </div>
        </div>
    );
};

export default Head;
