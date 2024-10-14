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
    link: "/about-us",
  },

  {
    id: 2,
    title: "Services",
    link: "/services",
    children: [
      {
        name: "Commercial Cleaning",
        id: 1,
        link: "/services/#01",
      },
      {
        name: "Office Cleaning",
        id: 2,
        link: "/services/#02",
      },
      {
        name: "Window Cleaning",
        id: 3,
        link: "/services/#03",
      },
      {
        name: "Carpet Cleaning",
        id: 4,
        link: "/services/#04",
      },
      {
        name: "Janitorial Cleaning ",
        id: 5,
        link: "/services/#05",
      },
      {
        name: "Washroom Cleaning ",
        id: 6,
        link: "/services/#06",
      },
      {
        name: "Property Maintenance ",
        id: 7,
        link: "/services/#07",
      },
      {
        name: "Hard Floor Maintenance ",
        id: 8,
        link: "/services/#08",
      },
      {
        name: "Grass Cutting ",
        id: 9,
        link: "/services/#09",
      },
      {
        name: "Tree & Garden Maintenance",
        id: 10,
        link: "/services/#010",
      },
    ],
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact-us",
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
    <div className="fixed top-0 left-0  bg-white shadow-md z-50 w-full ">
      <nav>
        <div className="lg:container md:container  flex justify-between items-center  ">
          {/* Logo Section */}
          <Link href='/'>
            <div className="text-2xl flex items-center justify-center font-bold uppercase">
              <Image
                className="flex justify-center items-center"
                src={logo}
                alt="logo"
                height={80}
                width={80}
              />
              <p className="md:text-sm sx:text-xs  text-[#33297C] lg:text-2xl max-[500px]:text-sm">
                New
              </p>
              <p className="text-primary sx:text-xs md:text-sm lg:text-2xl max-[500px]:text-sm">
                Eco
              </p>
              <p className="ms-2 md:text-sm sx:text-xs max-[500px]:text-sm lg:text-2xl">
                CLEANING SERVICES
              </p>
            </div>
          </Link>

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
                            className="px-4 w-[200px] mt-1 py-2 hover:bg-[#33297C] hover:text-white "
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
    </div>
  );
};

export default Navber;
