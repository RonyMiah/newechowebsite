'use client'

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const ResponsiveMenu = ({ open }: { open: boolean }) => {
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
              <li> HOME </li>
              <li> ABOUT </li>
              <li> SERVICES </li>

              {/* Project with Submenu */}
              <li>
                <div onClick={handleSubMenuToggle} className="cursor-pointer flex justify-center items-center">
                  PROJECTS
                  <RiArrowDropDownLine />
                </div>

                {/* Submenu visibility based on state */}
                {showSubMenu && (
                  <ul className="mt-4 bg-gray-600 rounded-md p-4 space-y-4">
                    <li className="hover:text-gray-500">
                      Interior Maintenance
                    </li>
                    <li className="hover:text-gray-500">
                      Exterior Maintenance
                    </li>
                    <li className="hover:text-gray-500">Mobile Services</li>
                  </ul>
                )}
              </li>

              <li> CONTACT </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
