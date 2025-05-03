import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { MdNoMeals } from "react-icons/md";
import { RiPassportLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";

const PackageCard = ({
  img,
  title,
  location,
  guide,
  hotel,
  meals,
  visa,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
      onClick={handleOrderPopup}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt="No image"
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>

      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-2xl">{title}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <CgCalendarDates />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <IoDocumentTextOutline />
          <span>{guide}</span>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <RiHotelLine />
          <span>{hotel}</span>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <MdNoMeals />
          <span>{meals}</span>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          <RiPassportLine />
          <span>{visa}</span>
        </div>
        <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">${price}</p>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 hover:bg-card hover:text-white border-2 border-orange-500 transition-all duration-600 text-black uppercase px-5 py-3 rounded-full text-md">
            learn more <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
