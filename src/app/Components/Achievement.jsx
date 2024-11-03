"use client";
import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const Achievement = () => {
  const state = [
    {
      number: 19,
      icon: FaBriefcase,
      text: "Traning Course",
    },
    {
      number: 956,
      icon: FaClock,
      text: "Working Hours",
    },
    {
      number: 150,
      icon: ImUsers,
      text: "Happy Customers",
    },
    {
      number: 9,
      icon: FaTrophy,
      text: "International Awards",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="container mx-auto">
      <motion.div
        className="grid grid-cols-1 mb-16 p-7 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        {state.map((state, index) => {
          return (
            <div key={index} className="aboutAcheive">
              {/* Make Circle  */}
              <div className="aboutAcheiveCircle">
                {/* Write the Inner Text  */}
                <div
                  ref={ref}
                  className="text-3xl justify-center item-center text-center flex p-3"
                >
                  {inView && (
                    <CountUp start={0} end={state.number} duration={4} />
                  )}
                </div>
              </div>

              <div className="aboutAcheive">
                <state.icon className="text-2xl" />
                <h2>{state.text}</h2>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Achievement;
