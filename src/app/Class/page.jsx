'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const Page = () => {
  const classes = [
    {
      name: "Body Building",
      img: "/assets/img/classes/bodybuilding.jpg",
      text: "Sculpt your physique and build strength with our Body Building class. Designed to target specific muscle groups through resistance training and weightlifting, this class is perfect for individuals looking to increase muscle mass and definition.",
      href: "https://www.bodybuilding.com/content/5-best-bodybuilding-programs-to-pack-on-serious-muscle.html",
    },
    {
      name: "Cardio",
      img: "/assets/img/classes/cardio.jpg",
      text: "Get your heart pumping and burn calories with our Cardio class. Featuring high-energy workouts such as running, cycling, and aerobic exercises, this class is ideal for improving cardiovascular health, endurance, and overall fitness levels.",
      href: "https://www.medicalnewstoday.com/articles/cardio-exercises-at-home",
    },
    {
      name: "Cross Fit",
      img: "/assets/img/classes/crossfit.jpg",
      text: "Experience the ultimate fitness challenge with our CrossFit class. Combining elements of strength training, high-intensity interval training (HIIT), and functional movements, CrossFit offers a dynamic and varied workout that will push your limits and yield impressive results.",
      href: "https://sparkmembership.com/25-crossfit-challenges-you-can-use-in-your-gym/",
    },
    {
      name: "Fitness",
      img: "/assets/img/classes/fitness.jpg",
      text: "Elevate your fitness routine with our Fitness class. Tailored to accommodate all fitness levels, this class focuses on full-body workouts, core strengthening exercises, and flexibility training to improve overall health and well-being. Whether you're a beginner or seasoned athlete, our Fitness class will help you achieve your fitness goals.",
      href: "https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday",
    },
  ];

  return (
    <section>
      <motion.div
        className="grid grid-cols-1 gap-3 lg:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        {classes.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[500px] lg:h-[400px] flex flex-col justify-center items-center"
          >
            <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image src={item.img} fill className="object-cover h-full " alt="" />

            {/* Text Write  */}
            <div className="z-30 max-w-[380px] lg:max-w-[300px] text-center flex flex-col">
              <h2 className="text-red-800">{item.name}</h2>
              <p className="text-white">{item.text}</p>
              <button className="getStart m-8">
                <Link href={item.href}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Page;
