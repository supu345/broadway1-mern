import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Arafah from "../assets/arafah.png";
const Hero = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="w-full max-w-7xl h-[550px]  overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/20472958/pexels-photo-20472958/free-photo-of-men-gathered-around-kaba-in-mecca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 1"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Hajj & Umrah Companion
                </h2>
                <p className="mb-6">
                  Your trusted guide for a spiritual journey. Plan, book, and
                  manage your pilgrimage with ease.
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Shop Now
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src={Arafah}
                alt="Nature 2"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">Pilgrim's Planner</h2>
                <p className="mb-2">
                  Simplify your Hajj and Umrah experience with real-time
                  updates, guides, and essential resources.
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Explore Categories
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/18360295/pexels-photo-18360295/free-photo-of-prophets-mosque-in-medina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 3"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">Makkah Journey Hub</h2>
                <p className="mb-6">
                  A comprehensive app for Hajj and Umrah pilgrims—bookings,
                  itineraries, and spiritual tips all in one place.
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Grab the Deal
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/27130649/pexels-photo-27130649/free-photo-of-pilgrims-around-kaaba-in-al-haram-mosque-in-mecca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 4"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Pilgrimage Assistant
                </h2>
                <p className="mb-6">
                  Stay organized and spiritually prepared for your Hajj or Umrah
                  with our all-in-one travel assistant.
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Grab the Deal
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/16012748/pexels-photo-16012748/free-photo-of-close-up-of-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 4"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">Sacred Path Planner</h2>
                <p className="mb-6">
                  Experience a hassle-free pilgrimage with customized
                  itineraries, prayer reminders, and expert support.
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  View New Arrivals
                </button> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full flex flex-col  items-start pl-[100px] justify-center p-4 bg-gray-900 bg-opacity-50">
              <img
                src="https://images.pexels.com/photos/2787826/pexels-photo-2787826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nature 4"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative z-10 text-white">
                <h2 className="text-5xl font-bold mb-4">
                  Divine Journey Guide
                </h2>
                <p className="mb-6">
                  Elevate your Hajj and Umrah experience with seamless planning,
                  spiritual insights, and real-time support
                </p>
                {/* <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600">
                  Start Saving
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
