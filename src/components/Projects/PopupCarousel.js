import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import PopupMedia from "./PopupMedia";

const PopupCarousel = (props) => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      {props.media.map((file, index) => (
        <PopupMedia file={file} key={index} />
      ))}
    </Carousel>
  );
};

export default PopupCarousel;
