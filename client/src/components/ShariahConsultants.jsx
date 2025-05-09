import React from "react";
import Imam from "../assets/imam_hossain1.jpg";

const ShariahConsultants = () => {
  return (
    <div className="px-6 py-9">
      <div className="text-5xl font-bold">
        <p>Our distinguished Shariah consultants</p>
      </div>

      <div className="text-md py-6">
        <p>
          Our Shariah consultants are highly respected Islamic scholars,
          bringing profound expertise in Hajj and Umrah rituals, ensuring every
          step of your spiritual journey aligns with Islamic principles.
        </p>
      </div>

      <div className="px-6 py-9 flex flex-col gap-7 mb-9 mt-9  md:flex-row">
        {/* Left Section */}
        <div className="h-auto">
          {/* Larger background image */}
          <img
            src={Imam}
            alt="Dr. Imam Hossain"
            className="w-full md:w-[450px] h-[300px] md:h-[550px] rounded-2xl object-cover transition duration-700  ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-[40px]">
          <p>
            Dr. Mufti Imam Hossain, Associate Professor, is a renowned
            Bangladeshi Islamic scholar and researcher. He is a Ph.D. holder in
            Islamic Studies and has authored several books on Islamic theology
            and jurisprudence. Dr. Hossain has also made significant
            contributions to the field of Islamic finance and economics. He has
            served as a faculty member at various prestigious institutions in
            Bangladesh and has received several awards for his academic and
            research work. His expertise spans a wide range of topics, including
            Islamic law, history, and culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShariahConsultants;
