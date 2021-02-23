import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Qualifications.css";

const Qualifications = (props) => {
  return (
    <section id="qualifications">
      <div className="qualifications-content page-box">
        <SectionTitle title="qualifications and skills" />
        <div className="qualifications-wrap">
          <div className="col-3 qualification-box">yo</div>
          <div className="col-3 qualification-box">yo</div>
          <div className="col-3 qualification-box">yo</div>
          <div className="col-3 qualification-box">yo</div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
