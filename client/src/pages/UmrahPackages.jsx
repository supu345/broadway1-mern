import React from "react";
import Pakages from "../components/pakages";
import { CgCalendarDates } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { MdNoMeals } from "react-icons/md";
import { RiPassportLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
const UmrahPackages = () => {
  return (
    <div>
      {" "}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/12607981/pexels-photo-12607981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
          className="h-[300px] w-[1400px] object-cover"
        />
        <p className="absolute bottom-4 left-4  text-white text-2xl bg-black/80 px-4 py-2 rounded">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          /
          <Link to="/umrah-packages" className="hover:text-emerald-600">
            <span>UmrahPackages</span>
          </Link>
        </p>
      </div>
      <div className="px-8 ">
        <p className="text-3xl font-bold py-9">
          Fully Guided Umrah Package 2025 from Bangladesh
        </p>

        <p className="py-6">
          The Kingdom of Saudi Arabia (KSA) higher authority has declared that
          they will allow 127,198 pilgrims from Bangladesh to perform hajj in
          the year 2025. Don't wait if you like to go for Hajj next year.
          Register your Hajj package and take the first step towards religious
          journey.
        </p>

        <p className="text-3xl font-bold py-9">
          Available Umrah Package & Price 2025 from Dhaka
        </p>

        <p>
          Call us today at +880 1713 155200 for a fully-guided and affordable
          Umrah package from Bangladesh.
        </p>

        <div>
          <Pakages />
        </div>
      </div>
      <div className="pb-8 bg-[url('https://img.freepik.com/free-vector/flat-arabic-pattern-background_79603-1826.jpg?t=st=1745132605~exp=1745136205~hmac=4850023e69fe9f3ab56321c8bcef4ae1bf91691eefbc1dceb51dccda4299d36c&w=1380')] ">
        <p className="py-7 "></p>

        <div>
          <div className="flex flex-row px-9 ">
            <div className="w-1/2 rounded-md bg-white shadow-md h-[500px]">
              <div className="bg-white rounded-b-lg">
                <div className=" transition-all duration-500  dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg">
                  <div className="space-y-2 p-3 pl-9">
                    <h1 className="line-clamp-1 font-bold text-2xl">
                      Customized Umrah Package
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
            <div className="w-1/2 shadow-md rounded-md">
              <img
                src="https://images.pexels.com/photos/30768739/pexels-photo-30768739/free-photo-of-pilgrims-at-al-masjid-an-nabawi-in-medina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="test1"
                className=" h-[500px] w-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-9 py-9">
        <h1 className="line-clamp-1 font-bold text-3xl mb-4">
          Book Umrah Online: One-stop solution from Bangladesh
        </h1>
        {/*Book Umrah Online */}
        <div className="flex flex-row gap-5">
          <div className="w-1/2">
            <p>
              Embarking on a fulfilling Umrah pilgrimage is now within reach for
              budget-conscious travelers with our low-price Umrah packages.
            </p>
            <br />
            <p>
              Our one-stop solutions offer comprehensive packages that cater to
              your budget, ensuring a memorable and spiritually uplifting
              journey. We understand the importance of balancing affordability
              with an enriching pilgrimage experience.
            </p>
            <br />
            <p>
              We plan our every Umrah trip with considerations for
              affordability, private transportation, & personalized attention.
            </p>
            <p className="font-bold text-3xl py-4">
              Package features and benefits:
            </p>
            <div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Umrah Visa with Insurance</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Direct Flight - SV or BG</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">
                  Premium Hotels within walking distance of 150-500MTR
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Private transportation in Saudi</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Private transportation in Saudi</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Private transportation in Saudi</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <MdDoubleArrow />
                <p className="py-1">Private transportation in Saudi</p>
              </div>
            </div>
            <div className="py-6">
              <button className="bg-amber-200 px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
                Book Umrah Package{" "}
              </button>
            </div>
          </div>
          <div className="w-1/2 py-[150px]">
            <img
              src=" https://images.pexels.com/photos/12765598/pexels-photo-12765598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="w-[500px] py-6"
            />
          </div>
        </div>
        {/*Umrah visa requirements */}
        {/* <div className="relative flex flex-row gap-5">
          <div className=" flex flex-row gap-5  bg-cover bg-center">
            <div className="w-1/2 py-[150px]">
              <img
                src="https://images.pexels.com/photos/12765598/pexels-photo-12765598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                className="w-[500px] py-6"
              />
            </div>
            <div className="w-1/2 text-black z-10">
              <div>
                <div className="flex flex-row gap-3 items-center">
                  <MdDoubleArrow />
                  <p className="py-1">Umrah Visa with Insurance</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <MdDoubleArrow />
                  <p className="py-1">Direct Flight - SV or BG</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <MdDoubleArrow />
                  <p className="py-1">
                    Premium Hotels within walking distance of 150-500MTR
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <MdDoubleArrow />
                  <p className="py-1">Private transportation in Saudi</p>
                </div>
              </div>
              <div className="py-6">
                <button className="bg-amber-200 px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
                  Book Umrah Package{" "}
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UmrahPackages;
