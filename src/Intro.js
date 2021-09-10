import React from "react";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import suryaansh from "./images/suryaansh.png";

export default function Intro() {
  return (
    <div className="intro-container" id="home">
      <div className="intro-left">
        <div className="name">Suryaansh Rathinam </div>

        <div className="typewriter">
          <Typewriter
            options={{
              strings: [
                "WEB-DEVELOPER",
                "ML ENTHUSIAST",
                "DATA SCIENCE ENTHUSIAST",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="intro-right">
        <img src={suryaansh} className="intro-img" />
      </div>
    </div>
  );
}
