import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      name="home"
      className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-black"
    >
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        WELCOME
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          We do...
        </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold text-pink-500 md:pl-4 pl-2"
          strings={[
            "Bleaching",
            "Eye Treatments",
            "Facials",
            "Hairdressing",
            "Hair + Makeup",
            "IPL Hair Removal",
            "Manicures/Pedicures",
            "Massages",
            "Mehndi",
            "Threading/Waxing",
          ]}
          typeSpeed={50}
          backSpeed={50}
          attr=""
          loop
        />
      </div>
      <p className="md:text-2xl text-xl font-bold text-gray-500">
        Still open for business so book an appointment now!
      </p>
      <button className="md:text-2xl text-xl bg-pink-500 hover:bg-pink-400 text-white hover:text-gray-100 w-[200px] rounded-md my-6 mx-auto py-3 font-bold ease-in-out duration-500">
        <a href="tel:01484511199" target="_blank" rel="noreferrer">
          Get in Touch
        </a>
      </button>

      <div className="flex justify-center py-12">
        <Link to="about" smooth={true} duration={500} alt="top">
          <div className="rounded-full bg-pink-500 hover:bg-gray-100 shadow-lg shadow-pink-500 hover:shadow-gray-100 text-gray-100 hover:text-pink-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiChevronDoubleDown size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
