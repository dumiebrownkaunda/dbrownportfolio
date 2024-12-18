import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#, .NET", ratingPercentage: 100 },
    { skill: "REST API Development", ratingPercentage: 95 },
    { skill: "React JS", ratingPercentage: 95 },
    { skill: "HTML,CSS and Bootstrap", ratingPercentage: 100 },
    { skill: "PHP CodeIgnitor", ratingPercentage: 80 },
    { skill: "Microsoft SQL Server, MySQL, PostgreSQL", ratingPercentage: 90 },
    { skill: "Dart and Flutter", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Oracle FCUBS API",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "I developed complex Flexcube API integrations to ensure seamless communication with banking services, including transaction posting for billers like MRA, DRTSS, ESCOM, and waterboards. I also handled account validation and creation, managed forex rate updates, and created APIs for bulk operations, such as standing orders, account class and branch transfers, and multiple account closures. ",
      subHeading:
        "Tech Used: C# Web API, MSSQL,Swagger",
    },
    {
      title: "Deliwe Makata Website ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A personal website of Deliwe Makata, a Malawian professional specializing in business and development. She holds a Master's degree in Development Policy from the KDI School of Public Policy in South Korea. ",
      subHeading:
        "Tech Used:  WordPress, PHP, MySQL, Bootstrap.",
    },
    {
      title: "Multicsystems Website ",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "This is a start-up company that i got registered in 2019 that offers various services such web design and development, website hosting, domain name registration, graphic design and IT consultancy.",
      subHeading: "Tech Used: WordPress, PHP, MySQL, Bootstrap.",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"JAIN University, India"}
        subHeading={"MASTERS OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"University of Mzuzu, Malawi"}
        subHeading={"BACHELOR OF SCIENCE IN INFORMATION AND COMMUNICATION TECHNOLOGY"}
        fromDate={"2015"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"BEDIR INTERNATIONAL HIGH SCHOOL"}
        subHeading={
          "International General Certificate of Secondary Education (IGSCE)"
        }
        fromDate={"2014"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"BEDIR INTERNATIONAL HIGH SCHOOL"}
        subHeading={"Malawi School Certificate of Examination"}
        fromDate={"2010"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"NBS BANK PLC"}
          subHeading={"FULL STACK SOFTWARE ENGINEER, Acting Enterprise Systems Architect"}
          fromDate={"2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a Full Stack Software Engineer, Acting Enterprise Systems Architect
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - One of the projects I am most proud of is the Core Banking System Migration at NBS Bank PLC, transitioning
            from T24 to the Oracle Flexcube System. As the technical lead on this project, I was responsible for developing
            the complex integration of all Flexcube Interfaces APIs to ensure seamless communication with banking
            services. I designed the logic for posting transactions, which included handling billers such as MRA, DRTSS,
            ESCOM, and all waterboard payments, as well as validating and creating accounts, and fetching and uploading
            forex rates. Additionally, I worked on APIs to create bulk standing orders, transfer bulk account classes, transfer
            bulk account branches, and close multiple accounts simultaneously. Another notable project I worked on was
            developing a forex rates application that broadcasts daily forex rates across all branches and bureaus, providing
            customers with up-to-date information as they enter the branches.
          </span>
          <br />
          <span className="resume-description-text">
             {" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="ICT Trainer"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing"
      />
      <ResumeHeading
        heading="Gym"
        description="I like to hit the gym every now and then because i like to keep fit and healthy."
      />
      <ResumeHeading
        heading="Sports"
        description="I like to do sports such as basketball, football and pool."
      />
        <ResumeHeading
        heading="Documentaries"
        description="I like to watch documentaries i.e spiritual, success and history ."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
