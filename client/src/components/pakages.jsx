import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { MdNoMeals } from "react-icons/md";
import { RiPassportLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import about2 from "../assets/about/about2.jpeg";
import packages1 from "../assets/packages/packages1.jpeg";
import packages3 from "../assets/packages/packages3.jpeg";
import packages2 from "../assets/packages/packages2.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Pakages = () => {
  return (
    <div className="px-6 py-9  ">
      <div>
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
        >
          <button className="border border-blue-500 p-2 px-4 rounded-full mb-8 uppercase text-sm lg:2xl sm:text-base hover:bg-blue-500 hover:text-white transition">
            Our Packages
          </button>

          <p className="sm:text-2xl font-bold md:text-5xl lg:text-7xl">
            Explore Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
              Hajj Umrah Packages
            </span>
          </p>

          <p className="py-5 sm:py-6 lg:py-7 text-sm sm:text-base md:text-lg lg:text-2xl font-medium">
            Explore tailored Hajj and Umrah packages designed to provide a
            seamless spiritual journey with comfort, guidance, and convenience.
          </p>
        </motion.div>

        {/* pkg-1 */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col md:flex-row gap-9 lg:h-[650px]  bg-linear-to-r from-white to-green-100 rounded-lg border border-gray-200 p-5"
        >
          <div className="w-full md:w-2/5 group">
            <img
              src={about2}
              alt="VIP Umrah Package"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] lg:mb-6   rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
          <div className="w-full md:w-3/5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-gray-800">
              Economy/Standard Hajj Package (Shifting)
            </p>
            <p className="font-medium lg:text-3xl mt-6">
              Committed to delivering outstanding service, ensuring your journey
              is seamless from the initial inquiry to the final step.
            </p>
            <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

            {/* Features Section */}
            <div className="lg:text-3xl">
              <div className="flex flex-row gap-4 items-center   mt-6">
                <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                <p className="font-medium">
                  Azizia, Mecca, Madina - Hotel (Economy)
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                <div className="flex flex-row gap-4 items-center">
                  <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">35-40 days</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Halal Foods</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-3">
                <div className="flex flex-row gap-4 items-center">
                  <FaCar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Use Private VIP Bus</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaUserMinus className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Guided Tours</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaCcVisa className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Visa Included</p>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="mt-6">
                {/* <p className="text-amber-600 font-xl">Start From</p> */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                  {/* <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p> */}
                  <Link to="/contact">
                    <button className="mt-4 sm:mt-0 hover:border cursor-pointer p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Contact Us
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* pkg-2 */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col md:flex-row lg:h-[650px] lg:mb-6   mt-5 gap-9 bg-gradient-to-r from-green-100 to-white rounded-lg border border-gray-200 p-5"
        >
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <p className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold mt-6 text-gray-800">
              Standard Hajj Package (Shifting)
            </p>
            <p className="font-medium mt-6  lg:text-3xl">
              Committed to delivering outstanding service, ensuring your journey
              is seamless from the initial inquiry to the final step.
            </p>
            <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

            {/* Features Section */}
            <div className="lg:text-3xl">
              <div className="flex flex-row gap-4 items-center mt-6">
                <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                <p className="font-medium">
                  Azizia, Mecca, Madina - Hotel (Standard)
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                <div className="flex flex-row gap-4 items-center">
                  <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">35-40 days</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Halal Foods</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-3">
                <div className="flex flex-row gap-4 items-center">
                  <FaCar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Use Private VIP Bus</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaUserMinus className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Guided Tours</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaCcVisa className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Visa Included</p>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="mt-6">
                {/* <p className="text-amber-600 font-xl">Start From</p> */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                  {/* <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p> */}
                  <Link to="/contact">
                    <button className="mt-4 sm:mt-0 hover:border cursor-pointer p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Contact Us
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 group">
            <img
              src={packages1}
              alt="VIP Umrah Package"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        </motion.div>
        {/* pkg-3 */}

        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col md:flex-row gap-9  bg-linear-to-r from-white to-green-100 rounded-lg border border-gray-200 p-5"
        >
          <div className="w-full md:w-2/5 group">
            <img
              src={packages3}
              alt="VIP Umrah Package"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
          <div className="w-full md:w-3/5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-gray-800">
              Premium/Platinum Hajj Package(Shifting)
            </p>
            <p className="font-medium mt-6 lg:text-3xl">
              Committed to delivering outstanding service, ensuring your journey
              is seamless from the initial inquiry to the final step.
            </p>
            <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

            {/* Features Section */}
            <div className="lg:text-3xl">
              <div className="flex flex-row gap-4 items-center mt-6">
                <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                <p className="font-medium">
                  Azizia, Mecca, Madina - Hotel (Selected 5*/4*)
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                <div className="flex flex-row gap-4 items-center">
                  <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">35-40, 26-30, 20-22, 12-15 days</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Halal Foods</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-3">
                <div className="flex flex-row gap-4 items-center">
                  <FaCar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Use Private VIP Bus</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaUserMinus className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Guided Tours</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaCcVisa className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Visa Included</p>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="mt-6">
                {/* <p className="text-amber-600 font-xl">Start From</p> */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                  {/* <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p> */}
                  <Link to="/contact">
                    <button className="mt-4 sm:mt-0 hover:border cursor-pointer p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Contact Us
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* pkg-4 */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col md:flex-row mt-5 gap-9 bg-gradient-to-r from-green-100 to-white rounded-lg border border-gray-200 p-5"
        >
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl   font-bold mt-6 text-gray-800">
              Azizia Standard Hajj Package
            </p>
            <p className="font-medium mt-6 lg:text-3xl">
              Committed to delivering outstanding service, ensuring your journey
              is seamless from the initial inquiry to the final step.
            </p>
            <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

            {/* Features Section */}
            <div className="lg:text-3xl">
              <div className="flex flex-row gap-4 items-center mt-6">
                <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                <p className="font-medium">Mecca - Hotel (selected)</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                <div className="flex flex-row gap-4 items-center">
                  <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">12-15 days</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Halal Foods</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-3">
                <div className="flex flex-row gap-4 items-center">
                  <FaCar className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Use Private VIP Bus</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaUserMinus className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Guided Tours</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FaCcVisa className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Visa Included</p>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="mt-6">
                {/* <p className="text-amber-600 font-xl">Start From</p> */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                  {/* <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p> */}
                  <Link to="/contact">
                    <button className="mt-4 sm:mt-0 hover:border cursor-pointer p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Contact Us
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 group">
            <img
              src={packages2}
              alt="VIP Umrah Package"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pakages;
