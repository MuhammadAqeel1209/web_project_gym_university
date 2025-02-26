"use client";
import React from "react";
import { FaUsers, FaRunning } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import Achievement from "../Components/Achievement";
import { motion } from "framer-motion";

const page = () => {
  const featured = [
    {
      icons: <FaUsers />,
      title: "Award Winning Trainers",
      subtitle:
        "Our award-winning trainers are here to provide personalized coaching, ensuring that every aspect of your fitness journey is optimized for success. Benefit from their vast expertise and experience as they craft custom workout plans designed specifically for your goals and abilities.",
    },
    {
      icons: <FaRunning />,
      title: "Personalized Running Coaching",
      subtitle:
        "Our certified running coaches are dedicated to helping you achieve your running goals. Whether you're a beginner or a seasoned runner, our experts will tailor training plans to suit your needs, ensuring optimal performance and injury prevention.",
    },
    {
      icons: <IoIosPricetag />,
      title: "Excellent Prices",
      subtitle:
        "Enjoy access to our premium facilities and services at excellent prices that fit within your budget. We believe that fitness should be accessible to all, which is why we strive to offer unbeatable value without sacrificing quality or amenities.",
    },
    {
      icons: <FaDumbbell />,
      title: "Modern Equipment",
      subtitle:
        "Experience the future of fitness with our modern equipment, carefully selected to enhance your performance and results. From advanced cardio machines to cutting-edge strength training gear, our facility is equipped with the latest innovations to elevate your training sessions to new heights.",
    },
  ];

  return (
    <div className="mx-auto container m-5 ">
      <motion.div
        className="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h2>About Us</h2>
        <p>
          Step into our expansive gym and immerse yourself in a world of fitness
          excellence. Our facility boasts a wide array of cutting-edge equipment
          and spacious workout areas to accommodate every exercise imaginable.
          With expert trainers on hand to provide guidance and motivation,
          you&apos;ll feel empowered to push your limits and achieve your fitness
          aspirations. From cardio machines to free weights, functional training
          areas to group fitness classes, we have everything you need to sculpt
          your body and elevate your performance. Join our vibrant community
          today and experience the transformative power of our premier fitness
          facility.
        </p>
      </motion.div>

      {/* Feature Items Of Our Gym */}
      <motion.div
        className="featureDiv"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        {featured.map((feature, index) => (
          <div key={index} className="featurekey">
            <div className="featureIcons">{feature.icons}</div>
            <div className="featureTextSub">
              <h3 className="text-3xl text-red-700">{feature.title}</h3>
            </div>
            <div className="featureTextSub">
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <Achievement />
    </div>
  );
};

export default page;