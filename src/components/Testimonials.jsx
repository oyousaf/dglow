import React from "react";
import { Link } from "react-scroll";
import { HiChevronDoubleUp } from "react-icons/hi";

const Testimonials = () => {
  return (
    <div name="testimonials" className="w-full py-[10rem] px-4 font-bold">
      <h1 className="text-pink-500 text-center font-bold text-5xl md:text-7xl">
        Testimonials
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 py-4 gap-8">
        <div className="text-center font-bold shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <p className="py-4 mx-8 mt-4">
            Simi was so kind and welcoming and did a great job with my hair. I
            would definitely recommend, the best!!😊
          </p>
          <h2 className="text-xl text-pink-500 py-4">Parminder Sandhu</h2>
        </div>
        <div className="text-center font-bold shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <p className="py-4 mx-8 mt-4">
            I got my makeup done for a wedding and love it! As a girl with
            Atopic Eczema, makeup never suited me but Desi Dlow sorted it and
            made it perfect for me!! I got my hair dyed today and yet again they
            did great! I'm so happy with the service they are friendly. Would
            definitely recommend that you go - I will definitely be back soon ❤
          </p>
          <h2 className="text-xl text-pink-500 py-4">Areeba Masood</h2>
        </div>
        <div className="text-center font-bold shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <p className="py-4 mx-8 mt-4">
            Always a lovely atmosphere when we go there. Highly recommended for
            all beauty treatments. After a recent hair colouring I will
            definitely be going back again. Thank you Desi Glow.
          </p>
          <h2 className="text-xl text-pink-500 py-4">Nuhida Ali</h2>
        </div>
      </div>

      <div className="flex justify-center py-12">
        <Link to="home" smooth={true} duration={500} alt="top">
          <div className="rounded-full bg-pink-500 hover:bg-gray-100 shadow-lg shadow-pink-500 hover:shadow-gray-100 text-gray-100 hover:text-pink-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiChevronDoubleUp size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
