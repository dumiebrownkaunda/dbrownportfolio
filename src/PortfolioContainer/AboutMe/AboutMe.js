import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I hold a MSc in Computer Science and IT, obtained from JAIN University, India and a Bachelor's degree InInformation and Communication Technology (ICT) obtained from Mzuzu University, Malawi. I am a client-focused software developer with over four years of professional experience. I have a proven track record inmanaging and supporting the design and development of both web and mobile applications working as a teamleader in a group of 6 other developers. My expertise spans the entire software development life cycle, fromrequirement gathering and feasibility studies to deployment and maintenance. I have also been responsible fordeveloping and maintaining software development policies and standards within a banking environment",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile development",
        "Software Tool development",
        "Building REST API",
        "Graphic Designing",
        "WordPress Development",
      ],
      heading: "Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <b>
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </b>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="DUMISANI_BROWN_KAUNDA_CV.pdf"
                download="Dumie Brown Kaunda DUMISANI_BROWN_KAUNDA_CV.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
