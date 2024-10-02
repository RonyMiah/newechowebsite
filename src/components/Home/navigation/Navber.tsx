"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavberMenue = [
  {
    id: 1,
    title: "About Us",
    link: "/about",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
    children: [
      {
        name: "Interior Maintenance",
        id: "01",
        link: "/interior-maintenance",
      },
      {
        name: "Exterior Maintenance",
        id: "02",
        link: "/exterior-maintenance",
      },
      {
        name: "Mobile Services",
        id: "03",
        link: "/mobile-services",
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

const Navber = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubMenu = (id:any) => {
    setShowSubMenu(id);
  };

  const closeSubMenu = () => {
    setShowSubMenu(null);
  };

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center ">
          {/* Logo Section */}
          <div className="text-2xl flex items-center justify-center font-bold uppercase">
            <Image
              className="flex justify-center items-center"
              src={logo}
              alt="logo"
              height={90}
              width={90}
            />
            <p className="md:text-sm text-[#33297C] lg:text-2xl max-[500px]:text-sm">
              New
            </p>
            <p className="text-primary md:text-sm lg:text-2xl max-[500px]:text-sm">
              Eco
            </p>
            <p className="ms-2 md:text-sm max-[500px]:text-sm lg:text-2xl">
              CLEANING SERVICES
            </p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavberMenue.map((item) => {
                if (!item.children) {
                  return (
                    <li
                      key={item.id}
                      className={
                        item.id === 4
                          ? "bg-[#33297C] px-4 py-2 text-white rounded-full hover:bg-red-600"
                          : "inline-block py-1 px-3 hover:text-red-600 font-semibold border-b-2 border-transparent hover:border-blue-700 transition-all duration-2000"
                      }
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.id}
                    className="relative group z-50"
                    onMouseEnter={() => handleSubMenu(item.id)}
                    onMouseLeave={closeSubMenu}
                  >
                    <div className="inline-block py-1 px-3 hover:text-red-600 font-semibold border-b-2 border-transparent hover:border-blue-700 transition-all duration-2000 ">
                      <Link
                        href={item.link}
                        className="flex justify-center items-center "
                      >
                        {item.title} <RiArrowDropDownLine />
                      </Link>
                    </div>

                    {/* Submenu */}
                    {showSubMenu === item.id && (
                      <ul className="absolute left-0  bg-white shadow-md rounded-md ">
                        {item.children.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="px-4 mt-1 py-2 hover:bg-[#33297C] hover:text-white hover:rounded-md "
                          >
                            <Link href={subItem.link}>{subItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navber;
