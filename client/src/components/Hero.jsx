import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Arafah from "../assets/arafah.png";
import banner1 from "../assets/banner/banner1.jpeg";
import banner2 from "../assets/banner/banner2.jpeg";
import banner3 from "../assets/banner/banner3.jpeg";
import banner4 from "../assets/banner/banner4.jpeg";
import banner5 from "../assets/banner/banner5.jpeg";

const slides = [
  {
    img: banner1,
    title: "Hajj & Umrah Companion",
    desc: "Your trusted guide for a spiritual journey. Plan, book, and manage your pilgrimage with ease.",
  },
  {
    img: Arafah,
    title: "Pilgrim's Planner",
    desc: "Simplify your Hajj and Umrah experience with real-time updates, guides, and essential resources.",
  },
  {
    img: banner2,
    title: "Makkah Journey Hub",
    desc: "A comprehensive app for Hajj and Umrah pilgrims—bookings, itineraries, and spiritual tips all in one place.",
  },
  {
    img: banner3,
    title: "Pilgrimage Assistant",
    desc: "Stay organized and spiritually prepared for your Hajj or Umrah with our all-in-one travel assistant.",
  },
  {
    img: banner5,
    title: "Sacred Path Planner",
    desc: "Experience a hassle-free pilgrimage with customized itineraries, prayer reminders, and expert support.",
  },
  {
    img: banner4,
    title: "Divine Journey Guide",
    desc: "Elevate your Hajj and Umrah experience with seamless planning, spiritual insights, and real-time support.",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full max-w-[1920px] h-screen overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-start bg-black bg-opacity-40">
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="relative z-10 px-4 sm:px-10 lg:px-24 max-w-[75%]">
                <h2 className="text-white text-3xl sm:text-5xl xl:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-white text-lg sm:text-xl xl:text-2xl mb-8 max-w-[900px] drop-shadow">
                  {slide.desc}
                </p>
                {/* <button className="px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700">
                  Learn More
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
