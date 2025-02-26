"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image"; // Import the Image component

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-black w-full">
      <nav className="container mx-auto flex justify-between items-center px-4 xl:px-0">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="mt-3 h-14">
            <Link href="/">
              {/* Replace <img> with <Image /> */}
              <Image
                src="/assets/img/logo.png" // Path to your image
                alt="Logo" // Alt text for accessibility
                width={96} // Desired width
                height={56} // Desired height
                className="w-24 h-auto" // Additional styling
              />
            </Link>
          </div>
          <button
            className="text-white md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row md:flex items-center md:space-x-5 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li onClick={handleLinkClick}>
            <Link href="/" className="Nav">
              Home
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/About" className="Nav">
              About
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/Class" className="Nav">
              Class
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/Team" className="Nav">
              Team
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/Price" className="Nav">
              Prices
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-5">
          <button className="Nav" onClick={openModal}>
            Login
          </button>
          <Link href="/Contact" className="Nav">
            Register
          </Link>
        </div>
      </nav>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default NavBar;