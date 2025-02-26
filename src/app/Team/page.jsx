"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  const trainerData = [
    {
      img: "/assets/img/trainers/david.jpg",
      name: "David Williams",
      role: "Body Builder Coach",
    },
    {
      img: "/assets/img/trainers/matt.jpg",
      name: "Matt Stone",
      role: "Trainer Classes Teacher",
    },
    {
      img: "/assets/img/trainers/rosy.jpg",
      name: "Rivera Fitness",
      role: "Fitness Coach",
    },
    {
      img: "/assets/img/trainers/sofia.jpg",
      name: "Dylan Werner",
      role: "Yoga Coach",
    },
  ];

  return (
    <section>
      <motion.div
        className="mx-auto container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h2 className="justify-center text-center h-full flex flex-col mt-2">
          Our Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {trainerData.map((item, index) => {
            return (
              <div key={index}>
                <div className="relative h-[320px] w-[320px] mx-auto mb-4 bg-black/50 top-0 z-10">
                  <Image
                    src={item.img}
                    alt={item.name} // Add alt text here
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center justify-center mb-3">
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default page;