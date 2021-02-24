import React from "react";

const QualificationBox = (props) => {
  const imageUrl = `${process.env.PUBLIC_URL}/qualifications-images/logo-${props.id}.png`;

  return (
    <div className="qualification-box col-3">
      <div className="qualification-logo">
        <img
          width="120px"
          height="120px"
          src={imageUrl}
          alt={`${props.id}logo`}
        />
      </div>
      <div className="qualification-text">
        <div className="qualification-title">
          <h1>{props.title}</h1>
        </div>
        <div className="qualification-content">{props.text}</div>
      </div>
    </div>
  );
};

export default QualificationBox;
