import "./App.css";
import React, { Component } from "react";
import dg from "./images/DG_logo_1.png";
import psych from "./images/psych.png";

import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="main proj-main">
        <div className="row" id="projects">
          Projects
        </div>
        <div className="row proj-row">
          <div id="card4">
            <img src={dg} className="dg-logo" alt="icon" />
            <div className="project-link">
              <a href="https://datagrad.suryaanshrathinam.com" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/DataGrad"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
          <div id="card4">
            <img src={psych} className="psych" alt="icon" />
            <div className="project-link">
              <a href="https://psychup.org.in/" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/PsychUporg/PsychUp-.org"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
            {/* <div className="project-link">
              <a
                href="https://github.com/PsychUporg/PsychUp-.org"
                target="__blank"
              >
                Visit Linkedin
              </a>
            </div> */}
          </div>
          <div id="card4">
            <div className="project-name">Ecommerce Application</div>
            <div className="project-link">
              <a
                href="https://ecommerce.suryaanshrathinam.com"
                target="__blank"
              >
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Ecommerce_site_practice"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
          <div id="card4">
            <div className="project-name" id="crud">
             Chat Application <br/> (Firebase and Chat-Engine)
            </div>
            <div className="project-link">
              <a href="https://chat.suryaanshrathinam.com" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Chat-app"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
          <div id="card4">
            <div className="project-name" id="crud">
              MERN CRUD Application with authentication using JWT
            </div>
            <div className="project-link">
              <a href="https://merncrud.suryaanshrathinam.com" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/MERN_CrudApp_Frontend"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
          <div id="card4">
            <div className="project-name" id="auth">
            Discussion rooms web application using Django
            </div>
            <div className="project-link">
              <a
                href="https://suryaansh-django-app.herokuapp.com/"
                target="__blank"
              >
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Discussion_Rooms_Django_App"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
          <div id="card4">
            <div className="project-name" id="auth">
              Authentication Application using Firebase
            </div>
            <div className="project-link">
              <a
                href="https://authentication.suryaanshrathinam.com"
                target="__blank"
              >
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Authentication-App"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>

          <div id="card4">
            <div className="project-name" id="crud">
              Quiz App using TypeScript
            </div>
            <div className="project-link">
              <a href="https://quizts.suryaanshrathinam.com" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Quiz-App-TS"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>

          <div id="card4">
            <div className="project-name"  id="crud">
              Responsive To-Do Application with authentication using JWT
            </div>
            <div className="project-link">
              <a href="https://todo.suryaanshrathinam.com" target="__blank">
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/To_Do_App"
                target="__blank"
              >
                Visit Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
