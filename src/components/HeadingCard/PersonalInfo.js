import React from "react";
import photo from "./PersonalInfo-Photo.png";

function PersonalInfo(props) {
  return (
    <div className="p-info-box card-general">
      <div className="p-info-photo-box col-2">
        <div id="p-info-photo">
          <img src={photo} alt="Profile" />
        </div>
      </div>
      <div id="p-info-desc" className="col-10">
        <span id="p-info-desc-title">Welcome to my programming portfolio!</span>
        <br />
        <span id="p-info-desc-text">
          My name is Ben, and I am a recent mathematics graduate from the
          University of Warwick. Since graduating I have been teaching myself to
          code, working on a number of personal projects in both Python and
          JavaScript, which can be found below. Most of the projects I have done
          have been based around implementing algorithms, but recently I have
          also begun learning ReactJS (which I used to create this portfolio).
        </span>
      </div>
    </div>
  );
}

export default PersonalInfo;
