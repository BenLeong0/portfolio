import React from "react";
import "./HeadingCard.css";
import HeadingLinks from "./HeadingLinks";

function HeadingCard() {
  return (
    <>
      <div id="heading-card">
        <div id="heading-title">
          <div style={{ "font-size": "50px" }}>Coding Portfolio</div>
          <div style={{ "font-size": "30px" }}>Ben Leong</div>
        </div>
      </div>
      <HeadingLinks />
    </>
  );
}

export default HeadingCard;
