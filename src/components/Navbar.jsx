import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-pink-500 sticky top-0 z-50">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        
        <Link className="cursor-pointer" to="home" smooth={true} duration={500}>
          <h1 className="w-full text-3xl font-bold text-white hover:text-pink-200">
            DESI GLOW
          </h1>
        </Link>

        <ul className="hidden md:flex">
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-200">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-300">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-200">
            <Link to="treatments" smooth={true} duration={500}>
              Treatments
            </Link>
          </li>
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-200">
            <Link to="gallery" smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-200">
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className="cursor-pointer text-xl font-bold p-4 text-white hover:text-pink-200">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Btn */}
        <div className="block md:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} className="text-pink-500" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-full h-screen flex flex-col justify-center items-center text-center bg-[#F8C8DC] ease-in-out duration-500"
              : "fixed right-[-100%]"
          }
        >
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
          </Link>
          <ul className="py-6 text-4xl ">
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="home"
                smooth={true}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="about"
                smooth={true}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="treatments"
                smooth={true}
                duration={500}
              >
                treatments
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="gallery"
                smooth={true}
                duration={500}
              >
                gallery
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="testimonials"
                smooth={true}
                duration={500}
              >
                testimonials
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="cursor-pointer font-bold text-gray-500 hover:text-gray-100 ease-in-out duration-300"
                onClick={handleNav}
                to="contact"
                smooth={true}
                duration={500}
              >
                contact
              </Link>
            </li>

            {/* Social Icons*/}
            <div className="flex bottom-0 mt-[100px]">
              <a
                className="m-4 hover:scale-110 ease-in-out duration-300 text-pink-500 hover:text-gray-100"
                href="https://www.facebook.com/desiglow"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                className="m-4 hover:scale-110 ease-in-out duration-300 text-pink-500 hover:text-gray-100"
                href="https://www.instagram.com/desiglowsalon"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                className="m-4 hover:scale-110 ease-in-out duration-300 text-pink-500 hover:text-gray-100"
                href="tel:01484511199"
                target="_blank"
                rel="noreferrer"
              >
                <FaPhone size={30} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
