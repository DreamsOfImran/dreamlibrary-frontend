import React from "react";
import { Carousel as CarouselList } from "react-responsive-carousel";

const Carousel = () => {
  return (
    <CarouselList autoPlay showThumbs={false} infiniteLoop>
      <div>
        <img
          src="https://placeimg.com/640/340/any?1"
          className="vh-100"
          alt="carousel"
        />
      </div>
      <div>
        <img
          src="https://placeimg.com/640/340/any?2"
          className="vh-100"
          alt="carousel"
        />
      </div>
      <div>
        <img
          src="https://placeimg.com/640/340/any?3"
          className="vh-100"
          alt="carousel"
        />
      </div>
    </CarouselList>
  );
};

export default Carousel;
