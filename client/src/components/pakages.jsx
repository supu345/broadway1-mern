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
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Pakages = () => {
  return (
    <div className="px-6 py-9  ">
      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView={"visible"}
        className="text-base sm:text-lg"
      >
        <div>
          <div className="text-center">
            <button className="border p-2 px-4 rounded-full mb-8 uppercase">
              our Packages
            </button>

            <p className="text-5xl font-bold  text-center">
              Explore Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
                Hajj Umrah Packages
              </span>
            </p>
            <p className="py-7 font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque
              <br />
              volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
              urna nibh viverra.
            </p>
          </div>
          {/* pkg-1 */}
          <div className="flex flex-col md:flex-row gap-9  bg-linear-to-r from-white to-blue-100 rounded-lg border border-gray-200 p-5">
            <div className="w-full md:w-2/5">
              <img
                src="https://images.pexels.com/photos/28209449/pexels-photo-28209449/free-photo-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                Hajj Package For Next 12 Nights.
              </p>
              <p className="font-medium mt-6">
                Dedicated to providing exceptional service from the moment you
                inquire about <br className="hidden md:block" /> our packages to
                completion.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">
                    Mecca - Al Safwah Royale Hotel (5 star)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">10 Mar 2024 - 22 Mar 2024</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">Halal Arabian Foods</p>
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
                  <p className="text-amber-600 font-xl">Start From</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                    <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p>
                    <button className="mt-4 sm:mt-0 hover:border p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Book Now
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* pkg-2 */}
          <div className="flex flex-col md:flex-row mt-5 gap-9 bg-gradient-to-r from-blue-100 to-white rounded-lg border border-gray-200 p-5">
            {/* Left Section */}
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                Vip Umrah Package For 12 Nights.
              </p>
              <p className="font-medium mt-6">
                Dedicated to providing exceptional service from the moment you
                inquire about <br className="hidden md:block" /> our packages to
                completion.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">
                    Mecca - Al Safwah Royale Hotel (5 star)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">10 Mar 2024 - 22 Mar 2024</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">Halal Arabian Foods</p>
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
                  <p className="text-amber-600 font-xl">Start From</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                    <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p>
                    <button className="mt-4 sm:mt-0 hover:border p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Book Now
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-2/5">
              <img
                src="https://images.pexels.com/photos/24285084/pexels-photo-24285084/free-photo-of-hall-in-great-mosque-of-mecca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover"
              />
            </div>
          </div>
          {/* pkg-3 */}

          <div className="flex flex-col md:flex-row gap-9  bg-linear-to-r from-white to-blue-100 rounded-lg border border-gray-200 p-5 mt-6">
            <div className="w-full md:w-2/5">
              <img
                src="https://images.pexels.com/photos/30429165/pexels-photo-30429165/free-photo-of-majestic-view-of-al-masjid-an-nabawi-in-madinah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="VIP Umrah Package"
                className="w-full h-[300px] md:h-[500px] rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-gray-800">
                Hajj Package For Next 12 Nights.
              </p>
              <p className="font-medium mt-6">
                Dedicated to providing exceptional service from the moment you
                inquire about <br className="hidden md:block" /> our packages to
                completion.
              </p>
              <div className="border border-gray-300 mt-6 md:mt-12 w-full md:w-[600px]"></div>

              {/* Features Section */}
              <div>
                <div className="flex flex-row gap-4 items-center mt-6">
                  <BsFillBuildingsFill className="text-sky-700 text-lg md:text-xl" />
                  <p className="font-medium">
                    Mecca - Al Safwah Royale Hotel (5 star)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                  <div className="flex flex-row gap-4 items-center">
                    <FaRegCalendar className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">10 Mar 2024 - 22 Mar 2024</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FaHamburger className="text-sky-700 text-lg md:text-xl" />
                    <p className="font-medium">Halal Arabian Foods</p>
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
                  <p className="text-amber-600 font-xl">Start From</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3">
                    <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                      10,000 USD
                    </p>
                    <button className="mt-4 sm:mt-0 hover:border p-2 bg-sky-600 text-white hover:bg-white hover:text-black px-4 rounded-full uppercase flex flex-row gap-3 items-center">
                      Book Now
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.p>

      {/* <div>
        <p className="text-3xl text-center">
          Available Umrah Packages from Bangladesh
        </p>
        <p className="text-xl text-center mb-7">
          Plan your Umrah and Ziyarah. Our upcoming Umrah packages will
          encompass a range of options, including economy and premium packages,
          designed to accommodate various budgets and preferences.
        </p>
        <div className="flex flex-row gap-6">
          <div className="w-1/3">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/28209449/pexels-photo-28209449/free-photo-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="test1"
                className="w-full rounded-t-lg"
              />
              <div className="bg-white rounded-b-lg">
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg">
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-2xl">
                      Premium Hajj
                    </h1>
                    <div className="flex items-center gap-2 opacity-70">
                      <CgCalendarDates />
                      <span>location</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <IoDocumentTextOutline />
                      <span>guide</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiHotelLine />
                      <span>hotel</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <MdNoMeals />
                      <span>meals</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiPassportLine />
                      <span>visa</span>
                    </div>
                    <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                      <div className="opacity-70">
                        <p>Cultural Relax</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">$6700</p>
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 hover:bg-card hover:text-white border-2 border-orange-500 transition-all duration-600 text-black uppercase px-5 py-3 rounded-full text-md">
                        learn more <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/28209449/pexels-photo-28209449/free-photo-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="test1"
                className="w-full rounded-t-lg"
              />
              <div className="bg-white rounded-b-lg">
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg">
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-2xl">
                      Premium Hajj
                    </h1>
                    <div className="flex items-center gap-2 opacity-70">
                      <CgCalendarDates />
                      <span>location</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <IoDocumentTextOutline />
                      <span>guide</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiHotelLine />
                      <span>hotel</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <MdNoMeals />
                      <span>meals</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiPassportLine />
                      <span>visa</span>
                    </div>
                    <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                      <div className="opacity-70">
                        <p>Cultural Relax</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">$6700</p>
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 hover:bg-card hover:text-white border-2 border-orange-500 transition-all duration-600 text-black uppercase px-5 py-3 rounded-full text-md">
                        learn more <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/28209449/pexels-photo-28209449/free-photo-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="test1"
                className="w-full rounded-t-lg"
              />
              <div className="bg-white rounded-b-lg">
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg">
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-2xl">
                      Premium Hajj
                    </h1>
                    <div className="flex items-center gap-2 opacity-70">
                      <CgCalendarDates />
                      <span>location</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <IoDocumentTextOutline />
                      <span>guide</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiHotelLine />
                      <span>hotel</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <MdNoMeals />
                      <span>meals</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiPassportLine />
                      <span>visa</span>
                    </div>
                    <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                      <div className="opacity-70">
                        <p>Cultural Relax</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">$6700</p>
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 hover:bg-card hover:text-white border-2 border-orange-500 transition-all duration-600 text-black uppercase px-5 py-3 rounded-full text-md">
                        learn more <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/28209449/pexels-photo-28209449/free-photo-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="test1"
                className="w-full rounded-t-lg"
              />
              <div className="bg-white rounded-b-lg">
                <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg">
                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-2xl">
                      Premium Hajj
                    </h1>
                    <div className="flex items-center gap-2 opacity-70">
                      <CgCalendarDates />
                      <span>location</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <IoDocumentTextOutline />
                      <span>guide</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiHotelLine />
                      <span>hotel</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <MdNoMeals />
                      <span>meals</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-70">
                      <RiPassportLine />
                      <span>visa</span>
                    </div>
                    <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                      <div className="opacity-70">
                        <p>Cultural Relax</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">$6700</p>
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 hover:bg-card hover:text-white border-2 border-orange-500 transition-all duration-600 text-black uppercase px-5 py-3 rounded-full text-md">
                        learn more <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Pakages;
