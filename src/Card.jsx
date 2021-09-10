import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const arr = [];
  for (let index = 0; index < props.full; index++) {
    arr.push(index);
  }
  return (
    <div>
      <div class="card-container">
        <div class="front">
          <img src={props.imgSrc} className="logo"></img>
        </div>
        <div class="back">
          {arr.map((item) => (
            <FontAwesomeIcon icon={faStar} className="star" />
          ))}

          {props.half ? (
            <FontAwesomeIcon icon={faStarHalf} className="star" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
