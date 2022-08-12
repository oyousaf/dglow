import React from "react";
import intro from "../assets/intro.png";

const Intro = () => {
  return (
    <div name="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={intro} alt="intro" />
        <div className="flex flex-col justify-center text-center font-bold">
          <p className="text-pink-400">A WORD FROM THE CEO</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 text-pink-500">
            Simi Tabasum
          </h1>
          <p className="text-xl p-2">
            "The strength and growth of my salon has been possible due to the
            loyal support of my customers, who have welcomed me with open arms
            and have encouraged me to bring in new technology, treatments and
            services which were not readily available to them. Desi Glow is not
            just another salon - our commitment and loyalty to our customers are
            the height and key to our success."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
