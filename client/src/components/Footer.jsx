import React from "react";
//import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const scrollTop = () => {
    const scrollStep = -window.scrollY / 50;
    const delay = 10;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, delay);
  };
  return (
    <footer className="relative bg-[url('https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat text-white">
      {/* Black Overlay */}

      <div className="absolute inset-0 bg-black opacity-80"></div>

      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
      >
        {/* Content */}
        <div className="relative w-[85%] flex flex-col md:flex-row px-[40px] py-6 z-10">
          {/* Logo and About Section */}
          <div className="text-center md:w-6/12 sm:text-center md:text-left">
            <div className="flex flex-col gap-3 w-10/12 mx-auto md:mx-0">
              <div className="flex flex-row items-center bg-white w-[100px] p-1 px-2 justify-center md:justify-start">
                <img className="w-[100px] h-[70px]" src={logo} alt="logo" />
              </div>
              <p>
                Broadway Tours & Travels ensures seamless and memorable
                journeys, specializing in exceptional Hajj and Umrah services
                with care and expertise.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center h-[50px] text-gray-200">
              <div className="flex gap-4">
                <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="hover:text-blue-700 text-xl" />
                </Link>
                <div className="flex gap-4">
                  <Link
                    to="https://www.facebook.com/broadway.tours.travels"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="hover:text-blue-700" />
                  </Link>
                </div>
                <Link
                  to="https://www.instagram.com/broadway.tours.travels/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-red-700" />
                </Link>

                {/* <Link href="#">
                <AiOutlineTwitter />
              </Link> */}
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="text-center md:w-3/12 sm:text-center md:text-left">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg mb-2 mt-6">Useful Links</p>
              <ul className="flex flex-col gap-2 text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/hajj-packages">Hajj Packages</Link>
                </li>

                <li>
                  <Link to="/umrah-packages">Umrah Packages</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center md:w-3/12 md:text-left">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg mb-2 mt-6">Address</p>
              <ul className="flex flex-col gap-2 text-white">
                <li>
                  Address :Park Plaza, Suite N4 (4th Floor), Plot 31, Road 17,
                  Banani 1213 Dhaka, Bangladesh
                </li>
                <li>Phone : 01799-224466</li>
                <li>Email : broadwayttl@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          onClick={scrollTop}
          id="scroll"
          className="fixed bottom-4 right-4 cursor-pointer"
        >
          <button className="bg-slate-300 p-3 rounded-md shadow-md">
            <span>
              <FaArrowUp className="text-black" />
            </span>
          </button>
        </div>
        <div className="border border-white"></div>

        {/* Footer Bottom Section */}
        <div className="relative z-10 w-[85%] flex flex-wrap justify-center items-center text-white mx-auto py-5 text-center">
          <span className="text-white">
            BroadWay Tours & Travels ©2025 All rights reserved | Developed by
            <Link
              to="https://codewithfoyzun.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:underline"> Suparna</span>
            </Link>
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
