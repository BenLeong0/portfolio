import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PopupCarousel = (props) => {
  const mediaLoad = (file) => {
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
          />
        </div>
      );
    }
  };

  const [carouselMedia, setCarouselMedia] = useState(<></>);

  useEffect(() => {
    setCarouselMedia(props.media.map((file) => mediaLoad(file)));
  }, [props.media]);

  return <Carousel infiniteLoop>{carouselMedia}</Carousel>;
};

export default PopupCarousel;
