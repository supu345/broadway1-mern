import React from "react";
import Imam from "../assets/imam_hossain1.jpg";
import Muhmud from "../assets/mahmud.jpg";
import Jaffar from "../assets/Jaffar.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const ShariahConsultants = () => {
  return (
    <div className="px-6 py-9">
      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView={"visible"}
        className="text-3xl sm:text-4xl md:text-5xl mb-5"
      >
        <p className="text-5xl font-bold">
          Our distinguished Shariah consultants
        </p>
      </motion.p>
      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView={"visible"}
        className="  mb-5"
      >
        <p className="text-md py-6">
          Our Shariah consultants are esteemed scholars well-versed in the
          teachings of Islam and possess a deep knowledge of the Hajj and Umrah
          rituals.
        </p>
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 rounded-2xl bg-slate-200 ">
          <img
            src={Imam}
            alt="Dr. Imam Hossain"
            className="h-[300px] md:h-[400px] w-full object-cover rounded-2xl transform transition duration-300 ease-in-out hover:scale-95 transform-origin-center"
          />
          <p className="px-6 py-2 text-2xl md:text-3xl font-bold">
            Dr. Imam Hossain
          </p>
          <p className="px-6 py-3 text-lg md:text-xl font-semibold">
            Associate Professor
          </p>
          <p className="px-6 py-3 text-lg md:text-xl">
            Dept. of Islamic Studies, National University
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 rounded-2xl bg-slate-200">
          <img
            src={Jaffar}
            alt="Jaffar S Chowdhury"
            className="h-[300px] md:h-[400px] w-full object-cover rounded-2xl transform transition duration-300 ease-in-out hover:scale-95 transform-origin-center"
          />
          <p className="px-6 py-2 text-2xl md:text-3xl font-bold">
            Jaffar S Chowdhury
          </p>
          <p className="px-6 py-3 text-lg md:text-xl font-semibold">
            Managing Director
          </p>
          <p className="px-6 py-3 text-lg md:text-xl">
            Managing Director, Broadway Tours & Travels
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 rounded-2xl bg-slate-200">
          <img
            src={Muhmud}
            alt="Mahmudur Rahman"
            className="h-[300px] md:h-[400px] w-full object-cover rounded-2xl transform transition duration-300 ease-in-out hover:scale-95 transform-origin-center"
          />
          <p className="px-6 py-2 text-2xl md:text-3xl font-bold">
            Mahmudur Rahman
          </p>
          <p className="px-6 py-3 text-lg md:text-xl font-semibold">Director</p>
          <p className="px-6 py-3 text-lg md:text-xl">
            Director, Broadway Tours & Travels
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShariahConsultants;
