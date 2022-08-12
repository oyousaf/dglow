import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bridal1 from "../../src/assets/bridal1.jpg";
import bridal2 from "../../src/assets/bridal2.jpg";
import bridal3 from "../../src/assets/bridal3.jpg";
import bridal4 from "../../src/assets/bridal4.jpg";
import bridal5 from "../../src/assets/bridal5.jpg";
import hair1 from "../../src/assets/hair1.jpg";
import hair2 from "../../src/assets/hair2.jpg";
import hair3 from "../../src/assets/hair3.jpg";
import hair4 from "../../src/assets/hair4.jpg";
import hair5 from "../../src/assets/hair5.jpg";
import makeup1 from "../../src/assets/makeup1.jpg";
import makeup2 from "../../src/assets/makeup2.jpg";
import makeup3 from "../../src/assets/makeup3.jpg";
import makeup4 from "../../src/assets/makeup4.jpg";
import mehndi1 from "../../src/assets/mehndi1.jpg";
import mehndi2 from "../../src/assets/mehndi2.jpg";
import mehndi3 from "../../src/assets/mehndi3.jpg";

const Gallery = () => {
  return (
    <div name="gallery" className="w-full py-[10rem] px-4 font-bold">
      <h1 className="text-pink-500 text-center font-bold text-5xl md:text-7xl">
        Gallery
      </h1>
      <Carousel
        autoPlay
        infiniteLoop
        className="max-w-[300px] mx-auto gap-8 pt-24"
      >
        <div>
          <img src={bridal1} alt="gallery" />
        </div>
        <div>
          <img src={bridal2} alt="gallery" />
        </div>
        <div>
          <img src={bridal3} alt="gallery" />
        </div>
        <div>
          <img src={bridal4} alt="gallery" />
        </div>
        <div>
          <img src={bridal5} alt="gallery" />
        </div>
        <div>
          <img src={hair1} alt="gallery" />
        </div>
        <div>
          <img src={hair2} alt="gallery" />
        </div>
        <div>
          <img src={hair3} alt="gallery" />
        </div>
        <div>
          <img src={hair4} alt="gallery" />
        </div>
        <div>
          <img src={hair5} alt="gallery" />
        </div>
        <div>
          <img src={makeup1} alt="gallery" />
        </div>
        <div>
          <img src={makeup2} alt="gallery" />
        </div>
        <div>
          <img src={makeup3} alt="gallery" />
        </div>
        <div>
          <img src={makeup4} alt="gallery" />
        </div>
        <div>
          <img src={mehndi1} alt="gallery" />
        </div>
        <div>
          <img src={mehndi2} alt="gallery" />
        </div>
        <div>
          <img src={mehndi3} alt="gallery" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
