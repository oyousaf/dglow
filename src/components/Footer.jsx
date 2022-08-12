import React from "react";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div name="contact" className="w-full bg-pink-500">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 gap-8 text-white">
        <div>
          <h1 className="w-full text-3xl font-bold">DESI GLOW</h1>
          <p className="font-medium py-4 lg:text-xl">
            We are open Monday through to Saturday from 11:00 - 18:30
          </p>
          <p className="font-medium py-4 lg:text-xl">
            209 Lockwood Road, Huddersfield, HD1 3TG
          </p>
        </div>
        <div className="flex md:w-[75%] my-6 justify-between">
          <h1 className="text-center text-xl font-bold">Get in touch:</h1>
          <a
            className="items-center hover:scale-105 ease-in-out duration-300 text-gray-300 hover:text-white"
            href="https://www.facebook.com/desiglow"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="cursor-pointer" size={30} />
          </a>
          <a
            className="hover:scale-105 ease-in-out duration-300 text-gray-300 hover:text-white"
            href="https://www.instagram.com/desiglowsalon"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            className="hover:scale-105 ease-in-out duration-300 text-gray-300 hover:text-white"
            href="tel:01484511199"
            target="_blank"
            rel="noreferrer"
          >
            <FaPhone size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
