import React from "react";
import { FaChevronRight } from "react-icons/fa";
import zamzam from "../assets/zam-zam.png";
const Services = () => {
  return (
    <div>
      <div className="text-center">
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
      </div>

      <div className="px-7 bg-gray-50 py-10 mb-10">
        <section data-aos="fade-up" className="container ">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section with Image */}
            <div className="w-full md:w-1/2 mb-5 md:mb-0">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/19995351/pexels-photo-19995351/free-photo-of-the-clock-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="No image"
                  className="mx-auto h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>
            </div>

            {/* Right Section with Grid */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-row gap-8 pb-8">
                  <img
                    src="https://images.pexels.com/photos/27490075/pexels-photo-27490075/free-photo-of-the-kaaba-is-a-large-black-stone-in-the-middle-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="No image"
                    className="h-[80px] w-[80px] mt-4"
                  />
                  <div>
                    <h1 className="text-xl md:text-xl font-bold">Tawaf</h1>
                    <p className="pb-3">
                      Circumambulation of the Kaaba performed during Hajj or
                      Umrah.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <img
                    src="https://images.pexels.com/photos/13311151/pexels-photo-13311151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="No image"
                    className="h-[80px] w-[80px]"
                  />
                  <div>
                    <h1 className="text-xl md:text-xl font-bold">Ihram</h1>
                    <p className="pb-3">
                      Sacred state with specific attire for Hajj or Umrah
                      rituals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <img
                    src="https://cdn.pixabay.com/photo/2012/12/10/12/50/the-pilgrims-guide-69219_1280.jpg"
                    alt="No image"
                    className="h-[80px] w-[80px]"
                  />
                  <div>
                    <h1 className="text-xl md:text-2xl">Mina</h1>
                    <p className="pb-3">
                      Tent city for pilgrims performing Hajj rituals near Mecca.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  <img
                    src="https://images.pexels.com/photos/27490075/pexels-photo-27490075/free-photo-of-the-kaaba-is-a-large-black-stone-in-the-middle-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="No image"
                    className="h-[100px] w-[80px]"
                  />
                  <div>
                    <h1 className="text-xl md:text-2xl">Jamarat</h1>
                    <p className="pb-3">
                      Stone pillars symbolizing the devil, stoned during Hajj
                      rituals.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pb-8">
                  <img
                    src={zamzam}
                    alt="No image"
                    className="h-[80px] w-[80px]"
                  />
                  <div>
                    <h1 className="text-xl md:text-2xl">Zam-Zam</h1>
                    <p className="pb-3">
                      Sacred water from Mecca, blessed and spiritually
                      significant.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  <img
                    src="https://images.pexels.com/photos/27490075/pexels-photo-27490075/free-photo-of-the-kaaba-is-a-large-black-stone-in-the-middle-of-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="No image"
                    className="h-[80px] w-[80px]"
                  />
                  <div>
                    <h1 className="text-xl md:text-2xl">Prayer Mat</h1>
                    <p className="pb-3">
                      Portable mat for performing prayers, ensuring cleanliness
                      and focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
