"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Swiper CSS
import "swiper/css";
import { Autoplay,Navigation,Pagination } from "swiper/modules";

const HomeSlide = () => {
  const text = [
    {
      src: "/assets/img/blog/post2.jpg",
      alt: "Image 1",
      text: "WORK HARD",
      text2: "MEET SUCCESS",
      para: "Transform your fitness journey with us. Join now and discover your potential.",
      button: "Get Started",
    },
    {
      src: "/assets/img/blog/post1.jpg",
      alt: "Image 2",
      text: "WORK HARD",
      text2: "MEET SUCCESS",
      para: "Transform your fitness journey with us. Join now and discover your potential.",
      button: "Get Started",
    },
    {
      src: "/assets/img/blog/post3.jpg",
      alt: "Image 3",
      text: "WORK HARD",
      text2: "MEET SUCCESS",
      para: "Transform your fitness journey with us. Join now and discover your potential.",
      button: "Get Started",
    },
    {
      src: "/assets/img/blog/post4.jpg",
      alt: "Image 4",
      text: "WORK HARD",
      text2: "MEET SUCCESS",
      para: "Transform your fitness journey with us. Join now and discover your potential.",
      button: "Get Started",
    },
  ];

  return (
    <div>
      <Swiper
      //  slidesPerView={1}
      //  spaceBetween={20}
      //  slidesPerGroupSkip={1}
      //  autoplay={{delay:3000}}
      //    loop={true}
      //   modules={[Autoplay]}
      slideToClickedSlide={true}
      modules={[Navigation,Pagination]}
      >
        {text.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center h-screen">
                <Image
                  className="w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  priority
                />
                <motion.div
                  className="absolute text-center text-white p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                >
                  <h1>
                    <span className="text-red-600">{item.text}</span> {item.text2}
                  </h1>
                  <p>{item.para}</p>
                  <button className="getStart">
                    <Link href="/Contact">{item.button}</Link>
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
