'use client'
import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

const Page = () => {
  const member = [
    {
      title: "Standard",
      price: "30",
      benfit: [
        { icon: FaCheck, text: "Include Membership" },
        { icon: FaCheck, text: "Access to all Gym Facilities" },
        { icon: MdClose, text: "Diet Plan Include" },
        { icon: FaCheck, text: "Health and Fitness Tip" },
        { icon: FaCheck, text: "Full Access to Everything" },
        { icon: MdClose, text: "No Additional amenities" },
        { icon : FaCheck, text : "Body Builder Coach"},
        { icon : MdClose, text : "Trainer Classes Teacher"},
        { icon : MdClose, text : "Fitness Coach"},
        { icon : MdClose, text : "Yoga Coach"},
      ],
    },
    {
      title: "Ultimate",
      price: "45",
      benfit: [
        { icon: FaCheck, text: "Include Membership" },
        { icon: FaCheck, text: "Access to all Gym Facilities" },
        { icon: FaCheck, text: "Diet Plan Include" },
        { icon: FaCheck, text: "Health and Fitness Tip" },
        { icon: FaCheck, text: "Full Access to Everything" },
        { icon: MdClose, text: "No Additional amenities" },
        { icon : FaCheck, text : "Body Builder Coach"},
        { icon : MdClose, text : "Trainer Classes Teacher"},
        { icon : FaCheck, text : "Fitness Coach"},
        { icon : MdClose, text : "Yoga Coach"},
      ],
    },
    {
      title: "Professional",
      price: "60",
      benfit: [
        { icon : FaCheck, text: "Include Membership" },
        { icon : FaCheck, text: "Access to all Gym Facilities" },
        { icon : FaCheck, text: "Diet Plan Include" },
        { icon : FaCheck, text: "Health and Fitness Tip" },
        { icon : FaCheck, text: "Full Access to Everything" },
        { icon : FaCheck, text: "No Additional amenities" },
        { icon : FaCheck, text : "Body Builder Coach"},
        { icon : FaCheck, text : "Fitness Coach"},
        { icon : FaCheck, text : "Yoga Coach"},
        { icon : FaCheck, text : "Trainer Classes Teacher"},
      ],
    },
  ];

  return (
    <section className="bg-price bg-cover bg-no-repeat relative bg-center h-screen text-white ">
      <motion.div
        className="mx-auto container items-center justify-center flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h2 className="font-bold text-4xl p-3">Membership Cards</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {member.map((item, index) => (
            <SwiperSlide key={index} className="w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="border border-red-800 hover:bg-black/70">
                <div className="p-3 border-b border-red-900">
                  <h2>{item.title}</h2>
                </div>
                <div className="p-3">
                  <ul className="flex flex-col gap-3 justify-center text-center">
                    {item.benfit.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <item.icon className="text-red-500 text-lg" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                  <p className="text-4xl m-2 text-red-800">
                    <sup>$</sup>
                    <strong className="text-6xl">{item.price}</strong>
                    <em>/Month</em>
                  </p>
                  <button className="getStart">
                    <Link href="/Contact">Buy Now</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Page;
