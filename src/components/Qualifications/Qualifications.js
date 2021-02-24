import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Qualifications.css";

import QualificationBox from "./QualificationBox";

const Qualifications = (props) => {
  const qualifications = require("./Qualifications.json").items;

  return (
    <section id="qualifications">
      <div className="qualifications-content page-box">
        <SectionTitle title="qualifications and skills" />
        <div className="qualifications-wrap">
          {qualifications.map((qualification) => (
            <QualificationBox {...qualification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
