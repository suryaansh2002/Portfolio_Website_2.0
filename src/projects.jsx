import "./App.css";
import React, { Component } from "react";
import dg from "./images/DG_logo_1.png";
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
              <a href="https://datagrad.netlify.app/" target="__blank">
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
            <div className="project-name">Ecommerce Application</div>
            <div className="project-link">
              <a
                href="https://suryaansh-ecommerce-frontend.netlify.app/"
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
            <div className="project-name">MERN CRUD Application</div>
            <div className="project-link">
              <a
                href="https://mern-crud-suryaansh.netlify.app/"
                target="__blank"
              >
                Visit Site
              </a>
            </div>
            <div className="project-link">
              <a
                href="https://github.com/suryaansh2002/Mern_CRUD_App"
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
                href="https://authentication-app-suryaansh.netlify.app/login"
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
        </div>
      </div>
    );
  }
}

export default Projects;