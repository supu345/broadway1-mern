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
        className="text-center px-4 md:px-16 lg:px-32"
      >
        <button className="border p-2 px-4 rounded-full mb-8 uppercase hover:bg-blue-500 hover:text-white">
          Our Services
        </button>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center">
          Discover Our Exceptional
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
            Hajj & Umrah Services
          </span>
        </p>
        <p className="py-7 text-sm sm:text-base md:text-lg lg:text-2xl font-medium px-4 sm:px-10 md:px-32 text-center">
          Broadway Tours & Travels Ltd. offers expert-guided Hajj and Umrah
          services with comprehensive packages, including flights,
          accommodations, and meals. Specializing in hassle-free pilgrimages,
          air tickets, and visa assistance, we ensure a seamless travel
          experience. Trusted by thousands, we’re your ultimate partner for
          spiritual journeys and global adventures.
        </p>
      </motion.div>

      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView={"visible"}
        className="px-4 sm:px-8 md:px-12 bg-gray-50 py-10 mb-10"
      >
        <section data-aos="fade-up" className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section with Image */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={cockTower}
                  alt="No image"
                  className="mx-auto h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover transition-transform duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
            </div>

            {/* Right Section with Grid */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  {
                    img: banner1,
                    title: "Tawaf",
                    description:
                      "Circumambulation of the Kaaba performed during Hajj or Umrah.",
                  },
                  {
                    img: ihram,
                    title: "Ihram",
                    description:
                      "Sacred state with specific attire for Hajj or Umrah rituals.",
                  },
                  {
                    img: mina,
                    title: "Mina",
                    description:
                      "Tent city for pilgrims performing Hajj rituals near Mecca.",
                  },
                  {
                    img: hajj24,
                    title: "Jamarat",
                    description:
                      "Stone pillars symbolizing the devil, stoned during Hajj rituals.",
                  },
                  {
                    img: zamzam,
                    title: "Zam-Zam",
                    description:
                      "Sacred water from Mecca, blessed and spiritually significant.",
                  },
                  {
                    img: prayermat,
                    title: "Prayer Mat",
                    description:
                      "Soft, comfortable, portable, non-slip, durable.",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex flex-row gap-4 lg:gap-6">
                    <div className="group w-16 sm:w-20 lg:w-[200px] lg:h-[100px] lg:mb-8 md:h-[20px]">
                      <img
                        src={service.img}
                        alt="Service Image"
                        className="h-[50px] sm:h-[80px] w-[60px] sm:w-[80px] lg:w-[400px] md:h-[90px] lg:h-[130px]   mt-4 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                      />
                    </div>
                    <div className="md:mt-3">
                      <h1 classNae="text-lg md:text-xl sm:text-xl lg:text-2xl font-bold ">
                        {service.title}
                      </h1>
                      <p classNae="text-lg md:text-xl sm:text-xl lg:text-2xl font-bold ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Services;
