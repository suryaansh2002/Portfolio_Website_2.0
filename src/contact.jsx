import "./App.css";
import React, { Component } from "react";
import "./contact.css";
import instagram from "./images/insta.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github2.png";
import medium from "./images/medium.png";

import gmail from "./images/gmail.png";

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <div className="row" id="contact">
          Get In Touch With Me
        </div>

        <form
          action="https://formsubmit.co/suryaansh28@gmail.com"
          method="POST"
          enctype="multipart/form-data"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Connect From Website"
          />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_next"
            value="https://suryaanshrathinam.netlify.app/thankyou.html"
          />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-container">
            <div className="form-name">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="Name"
                className="form-input"
                required
              ></input>
            </div>
            <div className="form-email">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="Email"
                className="form-input"
                required
              ></input>
            </div>
            <div className="form-message">
              <label id="msg" className="form-label">
                Message:
              </label>
              <input
                type="text"
                name="Message"
                className="form-input"
                required
              ></input>
            </div>
            <div className="form-submit">
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </form>

        <div className="other">
          Please feel free to reach out to me at any of my other handles:-
        </div>
        <div className="handles">
        <a
            href="https://suryaansh2002.medium.com/introductory-blog-4d8aacaab3a2"
            target="_blank"
            rel="noreferrer"
          >
            <img src={medium} className="icon" alt="icon" />
          </a>
          <a
            href="https://github.com/suryaansh2002"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} className="icon" alt="icon" />
          </a>
          <a
            href="https://www.instagram.com/suryaansh2807/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} className="icon" alt="icon" />
          </a>
          <a
            href="https://twitter.com/SuryaanshR"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} className="icon" alt="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} className="icon" alt="icon" />
          </a>
          <a
            href="mailto: suryaansh28@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} className="icon" alt="icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
