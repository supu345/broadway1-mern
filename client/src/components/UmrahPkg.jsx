import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner4 from "../assets/packages/banner4.jpeg";
import packages4 from "../assets/packages/packages4.jpeg";
import packages5 from "../assets/packages/packages5.jpeg";
import packages6 from "../assets/packages/packages6.jpeg";
import packages7 from "../assets/packages/packages7.jpeg";
import packages9 from "../assets/packages/packages9.jpeg";

const UmrahPkg = () => {
  return (
    <div>
      <div className="px-6 py-9  ">
        <div>
          <div className="text-center">
            <button className="border p-2 px-4 rounded-full mb-8 uppercase">
              our Packages
            </button>

            <p className="text-5xl font-bold  text-center">
              Explore Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
                Exclusive Umrah Package
              </span>
            </p>
            <p className="py-7 font-medium">
              Explore tailored Hajj and Umrah packages designed to provide a
              seamless spiritual journey with comfort, guidance, and convenience
            </p>
          </div>
          {/* pkg-1 */}
          <div className="flex flex-col md:flex-row gap-9  bg-linear-to-r from-white to-green-100 rounded-lg border border-gray-200 p-5">
            <div className="w-full md:w-2/5 group">
              <img
                src={banner4}
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                First Ramadan Umrah Package
              </p>
              <p className="font-medium mt-6">
                Committed to delivering outstanding service, ensuring your
                journey is seamless from the initial inquiry to the final step.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Mecca - Hotel (selected)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">14 days</p>
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
          </div>
          {/* pkg-2 */}
          <div className="flex flex-col md:flex-row mt-5 gap-9 bg-gradient-to-r from-green-100 to-white rounded-lg border border-gray-200 p-5">
            {/* Left Section */}
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                Last Ramadan Umrah Package
              </p>
              <p className="font-medium mt-6">
                Committed to delivering outstanding service, ensuring your
                journey is seamless from the initial inquiry to the final step.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Mecca - Hotel (selected)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">14 days</p>
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
                src={packages4}
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
            </div>
          </div>
          {/* pkg-3 */}

          <div className="flex flex-col md:flex-row gap-9  bg-linear-to-r from-white to-green-100 rounded-lg border border-gray-200 p-5">
            <div className="w-full md:w-2/5 group">
              <img
                src={packages5}
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                I’tikaf in Makkah – 16 Days
              </p>
              <p className="font-medium mt-6">
                Committed to delivering outstanding service, ensuring your
                journey is seamless from the initial inquiry to the final step.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Mecca - Hotel (selected)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">16 days</p>
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
          </div>
          {/* pkg-4 */}
          <div className="flex flex-col md:flex-row mt-5 gap-9 bg-gradient-to-r from-green-100 to-white rounded-lg border border-gray-200 p-5">
            {/* Left Section */}
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                After Eid Umrah Package – 14 Days
              </p>
              <p className="font-medium mt-6">
                Committed to delivering outstanding service, ensuring your
                journey is seamless from the initial inquiry to the final step.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">Mecca - Hotel (selected)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">14 days</p>
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
                    <button className="mt-4 sm:mt-0 hover:border p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Contact Us
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}

            <div className="w-full md:w-2/5 group">
              <img
                src={packages6}
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
            </div>
          </div>

          <div
            className="pb-8 mt-5 "
            style={{
              backgroundImage: `url(${packages7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="py-7 "></p>

            <div className="">
              <div className="flex flex-row px-9 py-9 p-9 ">
                <div className="w-1/2 shadow-md rounded-md md:w-2/5 group">
                  <img
                    src={packages9}
                    alt="VIP Umrah Package"
                    className="  h-[500px] w-full  rounded-tl-xl rounded-bl-xl  md:h-[500px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                </div>

                <div className="w-1/2 rounded-md bg-white shadow-md h-[500px]">
                  <div className="rounded-br-lg rounded-tr-lg">
                    <div className=" transition-all duration-500  ">
                      <div className="space-y-2 p-3 pl-9">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                          Customized Umrah Package
                        </p>
                        <div>
                          <div className="flex flex-row gap-4 items-center mt-6">
                            <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                            <p className="font-medium">
                              Mecca - Hotel (selected)
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                            <div className="flex flex-row gap-4 items-center">
                              <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                              <p className="font-medium"> -- days</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahPkg;
