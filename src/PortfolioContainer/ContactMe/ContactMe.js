import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../assets/images/mailz.jpeg";
import load1 from "../../assets/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./ContactMe.css";

import axios from "axios";
import { toast } from "react-toastify";
import FooterArrow from "../FooterArrow/FooterArrow";
import emailjs from 'emailjs-com';

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handlePhone =(e) => {
    setPhone(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_q1962qt',
      template_id: 'template_vj86d8m',
      user_id: '3nVvO-j-_GznNx39L',
      template_params: {
          'username': 'Dumie Brown Kaunda',
          'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
  };
    setBool(true);

    emailjs.sendForm(data.service_id, data.template_id, e.target, data.user_id)
    .then((result) => {
      setBanner("Thanks for contacting me, I will get back to you shortly🤝");
      toast.success("Email has been sent successfully🙂");
      setBool(false);

      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    },
    (error) => {
      setBanner(error.text);
      toast.error(error.text);
      setBool(false);
    });
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get in touch with me ✉",
                1000,
                "Let's work together ✅",
                1000,
              ]}
            />
          </h2>{" "}
          <a href="https://www.linkedin.com/in/dumisani-brown-kaunda-427292121/">
            <i className="fa fa-linkedin-square"></i>
          </a>{" "}
          <a href="https://www.instagram.com/dumisanbkaunda/">
            <i className="fa fa-instagram"></i>
          </a>{" "}
          <a href="https://www.facebook.com/multicsystech">
            <i className="fa fa-facebook-square"></i>
          </a>{" "}
          <a href="https://www.multicsystems.com/">
            <i className="fa fa-globe"></i>
          </a>{" "}
          <a href="https://wa.me/message/YSRV5ZPD2VGMD1/">
                <i className="fa fa-whatsapp"></i>
              </a>
        </div>
        <h4>Hey there</h4>
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt=" not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input 
              name="name"
              label="name"
              type="text"
              onChange={handleName}
              value={name}
            />
             <label htmlFor="phone">Phone Number</label>
            <input
            name="phone"
              label="phone"
              type="text"
              onChange={handlePhone}
              value={phone}
            />

            <label htmlFor="email">Email</label>
            <input
            name="email"
              label="email"
              type="email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
            name="message"
              label="message"
              type="text"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt=" not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterArrow />
    </div>
  );
}
