import React from "react";
import "./Footer.css";
import bg from "../../../assets/Home/shape-bg.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={bg} alt="no internet connection"></img>
      </div>
    </div>
  );
}

export default Footer;
