import "./App.css";
import React, { Component } from "react";
import dp from "./images/profile.jpeg";
import "./about.css";
import Typewriter from "typewriter-effect";

class About extends Component {
  render() {
    return (
      <div className="main about-container">
        <div className="row about-h" id="about">
          Get To Know Me
        </div>
        <div className="row" id="content">
          <div className="col-lg-12">
            <div className="about">
              I'm <span id="name">Suryaansh Rathinam</span>.<br />
              <br /> A Computer Science Sophmore at Manipal Institute of
              Technology, a Full-Stack Web Developer,, experiences in working
              with a variety of tech-stacks and tools.I am alway working on
              developing my skill set and exploring new technologies. <br />{" "}
              <br />
              Looking forward to working on projects, collaborating, and
              learning with anyone with similar interests.
              <br /> <br />
              Do reach out to me if you feel you've got something that would
              interest me.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
