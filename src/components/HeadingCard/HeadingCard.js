import React from "react";
import "./HeadingCard.css";
import HeadingLinks from "./HeadingLinks";
import PersonalInfo from "./PersonalInfo";

function HeadingCard() {
  return (
    <>
      <div id="heading-card" className="card-general">
        <div id="heading-title">
          <div style={{ fontSize: "50px" }}>Coding Portfolio</div>
          <div style={{ fontSize: "30px" }}>Ben Leong</div>
        </div>
      </div>
      <PersonalInfo />
      <HeadingLinks />
    </>
  );
}

export default HeadingCard;
