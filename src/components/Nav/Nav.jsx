import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">TypingFlash</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://www.linkedin.com/in/mayank-chaudhary-53b212163/"
                    rel="noreferrer"
                >
                    Find Me Here
                </a>
            </div>
        </div>
    );
};

export default Nav;
