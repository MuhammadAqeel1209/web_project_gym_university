'use client'
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="footer bg-gray-900 text-white p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row md:items-center text-center md:text-left">
          <li className="footerLi">
            <FaMapMarkedAlt className="footericon" />
            <span className="footertxt">Faisalabad, Pakistan</span>
          </li>
          <li className="footerLi">
            <FaPhoneAlt className="footericon" />
            <span className="footertxt">0322 7131980</span>
          </li>
          <li className="footerLi">
            <FaEnvelope className="footericon" />
            <span className="footertxt">fargymcenter@gmail.com</span>
          </li>
        </ul>
        <footer className="mt-4 md:mt-0 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} FAR Gym Center. All rights reserved.</p>
        </footer>
      </div>
    </motion.div>
  );
};

export default Footer;
