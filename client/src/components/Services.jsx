import React from "react";
import { FaChevronRight } from "react-icons/fa";
import zamzam from "../assets/zam-zam.png";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import cockTower from "../assets/blog/clocktower.jpeg";
import banner1 from "../assets/banner/banner1.jpeg";
import ihram from "../assets/blog/ihram.jpeg";
import mina from "../assets/blog/mina.jpg";
import hajj24 from "../assets/hajj2024-24.jpg";
import prayermat from "../assets/blog/prayermat.png";
const Services = () => {
  return (
    <div>
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView={"visible"}
        className="text-center"
      >
        <button className="border p-2 px-4 rounded-full mb-8 uppercase hover:bg-blue-500 hover:text-white">
          Our Services
        </button>

        <p className="text-5xl font-bold text-center">
          Discover Our Exceptional
          <br />
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-blue-600 via-blue-300 to-green-500  ">
            Hajj & Umrah Services
          </span>
        </p>
        <p className="py-7 font-medium px-[170px] text-center">
          Broadway Tours & Travels Ltd. offers expert-guided Hajj and Umrah
          services with comprehensive packages, including flights,
          accommodations, and meals. Specializing in hassle-free pilgrimages,
          air tickets, and visa assistance, we ensure a seamless travel
          experience. Trusted by thousands, we’re your ultimate partner for
          spiritual journeys and global adventures.
          <br />
        </p>
      </motion.div>

      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView={"visible"}
        className="px-7 bg-gray-50 py-10 mb-10"
      >
        <section data-aos="fade-up" className="container ">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section with Image */}
            <div className="w-full md:w-1/2 mb-5 md:mb-0">
              <div className="overflow-hidden">
                <img
                  src={cockTower}
                  alt="No image"
                  className="mx-auto h-[300px] rounded-2xl sm:h-[400px] md:h-[500px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
            </div>

            {/* Right Section with Grid */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-row gap-8 pb-8">
                  <div className="group w-[200px]">
                    <img
                      src={banner1}
                      className="h-[80px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>

                  <div>
                    <h1 className="text-xl md:text-xl font-bold">Tawaf</h1>
                    <p className="pb-3">
                      Circumambulation of the Kaaba performed during Hajj or
                      Umrah.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <div className="group w-[200px]">
                    <img
                      src={ihram}
                      className="h-[80px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>

                  <div>
                    <h1 className="text-xl md:text-xl font-bold">Ihram</h1>
                    <p className="pb-3">
                      Sacred state with specific attire for Hajj or Umrah
                      rituals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <div className="group w-[200px]">
                    <img
                      src={mina}
                      alt="No image"
                      className="h-[80px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl md:text-xl font-bold">Mina</h1>
                    <p className="pb-3">
                      Tent city for pilgrims performing Hajj rituals near Mecca.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  <div className="group w-[200px]">
                    <img
                      src={hajj24}
                      alt="No image"
                      className="h-[80px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Jamarat</h1>
                    <p className="pb-3">
                      Stone pillars symbolizing the devil, stoned during Hajj
                      rituals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <div className="group w-[200px]">
                    <img
                      src={zamzam}
                      alt="No image"
                      className="h-[100px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Zam-Zam</h1>
                    <p className="pb-3">
                      Sacred water from Mecca, blessed and spiritually
                      significant.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  <div className="group w-[200px]">
                    <img
                      src={prayermat}
                      alt="No image"
                      className="h-[100px] w-[80px] mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Prayer Mat</h1>
                    <p className="pb-3">
                      Soft, comfortable, portable, non-slip, durable,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Services;
