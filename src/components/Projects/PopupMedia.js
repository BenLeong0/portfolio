import React from "react";

const PopupMedia = (props) => {
  const file = props.file;

  if (file.type === "video") {
    return (
      <div>
        <video
          width="100%"
          autoPlay
          muted
          loop
          src={`${process.env.PUBLIC_URL}/popup-media/${file.filename}`}
          type="video/webm"
          alt={`${props.id} vid`}
          key={file.filename}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else if (file.type === "image") {
    return (
      <div>
        <img
          width="100%"
          src={`${process.env.PUBLIC_URL}/popup-media/${file.filename}`}
          alt={`${props.id} img`}
          key={file.filename}
        />
      </div>
    );
  }
};

export default PopupMedia;
