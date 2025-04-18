'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./UI/Button";
import Link from "next/link";

export default function VOGONavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="bg-[#3C373A] shadow-lg w-full  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15 py-4 sm:py-6">
        {/* Desktop and Mobile Layout */}
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center">
            <img
              src="/assets/go-global.png"
              className="w-32 sm:w-40 md:w-48 lg:w-[160px]"
              alt="logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a href="#" className="text-white text-sm xl:text-base hover:text-[#EB754A] transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#" className="text-[#B1AFB0] text-sm xl:text-base hover:text-[#EB754A] transition-colors duration-300 font-medium">
              Impacts
            </a>
            <a href="#" className="text-[#B1AFB0] text-sm xl:text-base hover:text-[#EB754A] transition-colors duration-300 font-medium">
              About Us
            </a>
            <a href="#" className="text-[#B1AFB0] text-sm xl:text-base hover:text-[#EB754A] transition-colors duration-300 font-medium">
              Contact Us
            </a>
          </div>

          {/* Desktop Login/Register Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/auth/login">
              <button className="text-white cursor-pointer text-sm xl:text-base hover:text-cyan-400 transition-colors duration-300 font-medium">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <Button text={"Register"} className="text-sm xl:text-base" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-3 overflow-hidden bg-gray-900 rounded-lg shadow-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col p-4 space-y-3 sm:space-y-4">
                <motion.a
                  href="#"
                  className="text-white hover:text-cyan-400 py-2 px-2 transition-colors duration-300 border-b border-gray-700 text-sm sm:text-base"
                  variants={itemVariants}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 py-2 px-2 transition-colors duration-300 border-b border-gray-700 text-sm sm:text-base"
                  variants={itemVariants}
                >
                  Impacts
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 py-2 px-2 transition-colors duration-300 border-b border-gray-700 text-sm sm:text-base"
                  variants={itemVariants}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 py-2 px-2 transition-colors duration-300 border-b border-gray-700 text-sm sm:text-base"
                  variants={itemVariants}
                >
                  Contact Us
                </motion.a>
                <motion.div
                  className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-2 px-2"
                  variants={itemVariants}
                >
                  <Link href="/auth/login">
                    <button className="text-white cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base py-2">
                      Login
                    </button>
                  </Link>
                  <Link href="/auth/register">
                    <Button text={"Register"} className="text-sm sm:text-base w-full sm:w-auto" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}