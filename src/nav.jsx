import "./App.css";
import React, { Component } from "react";
import "./nav.css";

import instagram from "./images/insta.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github2.png";
import gmail from "./images/gmail.png";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark " id="nav-id">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link item" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto ul-right">
            <li className="nav-item">
              <a
                href="https://github.com/suryaansh2002"
                target="_blank"
                rel="noreferrer"
              >
                <img className="nav-img" src={github} alt="icon" />
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.instagram.com/suryaansh2807/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="nav-img" src={instagram} alt="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/SuryaanshR"
                target="_blank"
                rel="noreferrer"
              >
                <img className="nav-img" src={twitter} alt="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="nav-img" src={linkedin} alt="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="mailto: suryaansh28@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="nav-img" src={gmail} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
