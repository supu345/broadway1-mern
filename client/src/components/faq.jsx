import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item open
  const faqs = [
    {
      question: "What is the difference between Hajj and Umrah?",
      answer:
        "Hajj is an annual pilgrimage performed during specific Islamic months, while Umrah can be performed anytime throughout the year.",
    },
    {
      question: "Who is eligible to perform Hajj?",
      answer:
        "Any Muslim who is physically, financially, and mentally capable and has reached the age of maturity is eligible for Hajj.",
    },
    {
      question: "What are the essential rituals of Umrah?",
      answer:
        "Umrah consists of Ihram, Tawaf around the Kaaba, Sa’i between Safa and Marwah, and shaving or trimming the hair.",
    },
    {
      question: "When is the best time to perform Umrah?",
      answer:
        "Umrah can be performed year-round, but many prefer the holy months of Ramadan or the cooler months for convenience.",
    },
    {
      question: "Can women perform Hajj or Umrah without a Mahram?",
      answer:
        "Women under 45 need a Mahram to travel for Hajj. However, some countries now allow women to travel in groups without a Mahram for Umrah.",
    },
    {
      question: "What is Ihram, and how do I enter it?",
      answer:
        "Ihram is a state of spiritual purity achieved by wearing specific garments and making an intention (Niyyah) to perform Hajj or Umrah.",
    },
    {
      question: "How long does Hajj take?",
      answer:
        "Hajj typically spans 5 to 6 days, from the 8th to the 12th (or 13th) of Dhul-Hijjah.",
    },
    {
      question: "What documents are required for a Hajj or Umrah visa?",
      answer:
        "A valid passport, a completed application form, vaccination certificates, and proof of travel arrangements are typically required.",
    },
    {
      question: "Can children accompany parents for Hajj or Umrah?",
      answer:
        "Yes, children can accompany parents, but parents should ensure their child can handle the physical demands of the journey.",
    },
    {
      question: "What are the key preparations for Hajj or Umrah?",
      answer:
        "Preparations include physical fitness, spiritual readiness, learning the rituals, obtaining necessary documents, and packing essential items like Ihram garments and personal supplies.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      className="px-6 py-9 relative  "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/11183364/pexels-photo-11183364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="text-center relative">
        <p>
          <button className=" p-2 px-4  mb-8">FAQs</button>
        </p>
        <p>
          <p className="text-5xl font-bold  text-center">
            Your Questions Answered
            <br />
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-green-500">
              Our Latest Blogs.{" "}
            </span> */}
          </p>
          <p className="py-7 px-20">
            Get quick answers to your questions about Hajj, Umrah, visas, and
            travel. Plan confidently with our detailed FAQ section.
          </p>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 p-10 relative">
        <div className="">
          {faqs.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className="border border-green-600 rounded-lg overflow-hidden my-5 w-[90%] mx-auto bg-white bg-opacity-80"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-md font-bold text-green-700">
                  {faq.question}
                </span>
                <span className="text-md">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="">
          {faqs.slice(5).map((faq, index) => (
            <div
              key={index + 5}
              className="border border-green-600 rounded-lg overflow-hidden my-5 w-[90%] mx-auto bg-white bg-opacity-80"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index + 5)}
              >
                <span className="text-md font-bold text-green-700">
                  {faq.question}
                </span>
                <span className="text-md">
                  {activeIndex === index + 5 ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index + 5 && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
