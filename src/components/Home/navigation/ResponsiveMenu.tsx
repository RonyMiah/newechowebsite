'use client'

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const ResponsiveMenu = ({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-gray-500 text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-6">
              <Link href="/" onClick={closeMenu}>
                <li> HOME </li>
              </Link>

              <Link href="/about-us" onClick={closeMenu}>
                <li> ABOUT </li>
              </Link>

              {/* Services with Submenu */}

              <Link href="/services">
                <li>
                  <div
                    onClick={handleSubMenuToggle}
                    className="cursor-pointer flex justify-center items-center"
                  >
                    SERVICES
                    <RiArrowDropDownLine />
                  </div>

                  {/* Submenu visibility based on state */}
                  {showSubMenu && (
                    <ul className="mt-4 bg-gray-600 rounded-md p-4 space-y-8">
                      <Link href="/services#01" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Commercial Cleaning
                        </li>
                      </Link>
                      <Link href="/services#02" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Office Cleaning
                        </li>
                      </Link>

                      <Link href="/services#03" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Window Cleaning
                        </li>
                      </Link>

                      <Link href="/services#04" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Carpet Cleaning
                        </li>
                      </Link>

                      <Link href="/services#05" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Janitorial Cleaning
                        </li>
                      </Link>
                      <Link href="/services#06">
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Washroom Cleaning
                        </li>
                      </Link>

                      <Link href="/services#07" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Property Main..
                        </li>
                      </Link>

                      <Link href="/services#08" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Hard Floor Main..
                        </li>
                      </Link>

                      <Link href="/services#09" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Grass Cutting
                        </li>
                      </Link>

                      <Link href="/services#010" onClick={closeMenu}>
                        <li className="hover:text-gray-900 text-sm my-2  text-center">
                          Tree & Garden Main..
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
              </Link>

              <Link href="/projects" onClick={closeMenu}>
                <li> Projects </li>
              </Link>

              <Link href="/projects" onClick={closeMenu}>
                <li> CONTACT </li>
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
