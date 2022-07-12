import "./App.css";
import React, { Component } from "react";
import "./skills.css";
//import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

import Card from "./Card";

import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import ts from "./images/ts.png";

import bootstrap from "./images/bootstrap.png";
import node from "./images/node.png";
import mongo from "./images/mongodb.png";
import native from './images/r-native.png'

import sass from "./images/sass.png";
import php from "./images/php.png";
import express from "./images/express.jpg";
import firebase from "./images/firebase.png";
import django from "./images/django.png";
import appium from "./images/appium.png";
import java from "./images/java.jpg";

import redux from "./images/redux.png";
import aws from "./images/aws.jpg";
import docker from "./images/docker.png";

import mysql from "./images/mysql.png";
import git from "./images/git.png";
import matlab from "./images/matlab.png";
import c from "./images/c.png";
import cpp from "./images/c++.png";

import python from "./images/python.png";
import selenium from "./images/selenium.png";
import flutter from "./images/flutter.png";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      text: "Show more...",
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <div className="main">
        <div className="row" id="skills">
          Skills
        </div>
        <div className="row card-box">
          <span className="first">
            <Card imgSrc={html} full={4} half={true} />
            <Card imgSrc={css} full={4} half={true} />
            <Card imgSrc={js} full={4} half={true} />
            <Card imgSrc={react} full={4} half={true} />

            <Card imgSrc={ts} full={2} half={true} />
            <Card imgSrc={bootstrap} full={4} half={true} />
            <Card imgSrc={node} full={3} half={true} />
            <Card imgSrc={native} full={3} half={false} />
          </span>
          {!this.state.isHidden && <Second />}
        </div>
        <div className="more">
          <button
            onClick={this.toggleHidden.bind(this)}
            className="btn btn-lg"
            id="button"
          >
            {this.state.isHidden ? "Show More..." : "Show Less..."}
          </button>
        </div>
      </div>
    );
  }
}
const Second = () => (
  <div className="second  card-box">
    <Card imgSrc={mongo} full={4} half={false} />
    <Card imgSrc={express} full={3} half={true} />
    <Card imgSrc={firebase} full={3} half={false} />
    <Card imgSrc={django} full={3} half={false} />

    <Card imgSrc={php} full={3} half={false} />
    <Card imgSrc={aws} full={3} half={false} />
    <Card imgSrc={docker} full={2} half={true} />
    <Card imgSrc={appium} full={2} half={true} />
    <Card imgSrc={java} full={2} half={true} />

    <Card imgSrc={redux} full={2} half={true} />
    <Card imgSrc={sass} full={3} half={true} />
    <Card imgSrc={mysql} full={4} half={false} />
    <Card imgSrc={git} full={4} half={false} />
    <Card imgSrc={matlab} full={3} half={true} />
    <Card imgSrc={c} full={4} half={false} />
    <Card imgSrc={cpp} full={4} half={false} />
    <Card imgSrc={python} full={4} half={true} />
    <Card imgSrc={selenium} full={4} half={true} />
    <Card imgSrc={flutter} full={3} half={false} />
  </div>
);

export default Skills;

