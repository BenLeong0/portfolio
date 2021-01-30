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
        <b>Welcome to my programming portfolio!</b>
        <br /> My name is Ben, and I am a recent mathematics graduate from the
        University of Warwick. Since graduating I have been self-teaching
        programming, working on a number of personal projects in both Python and
        JavaScript, which can be found below.
      </div>
    </div>
  );
}

export default PersonalInfo;
