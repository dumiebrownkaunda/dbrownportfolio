import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              
              <a href="https://www.linkedin.com/in/dumisani-brown-kaunda-427292121/">
                <i className="fa fa-linkedin-square"></i>
              </a>{" "}
              <a href="https://www.instagram.com/dumisanbkaunda/">
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a href="https://www.facebook.com/multicsystech">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.multicsystems.com/">
                <i className="fa fa-globe"></i>
              </a>
              <a href="https://wa.me/message/YSRV5ZPD2VGMD1/">
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Dumisani Brown Kaunda</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Cross Platform Dev",
                    1000,
                    "Mobile App Dev",
                    1000,
                  ]}
                ></Typical>
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applicatons with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a
              href="Dumisani_B_Kaunda_Resume.pdf"
              download="Dumie Brown Kaunda Dumisani_B_Kaunda_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
