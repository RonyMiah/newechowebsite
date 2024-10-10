"use client"
import Image from "next/image";
import React from "react";
import { FaHandsWash, FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdCleanHands } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";


const WhatWeDoCart = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center gap-4 my-14">
      {/* Card 1 */}
      <div className="w-[510px] h-[330px]  hover:bg-[#1f236f] transition-all duration-500  lg:flex md:flex sm:flex-row sm:flex  text-white m-0 overflow-hidden relative group shadow-[0px_0px_11px_-4px_rgb(102,102,112)] hover:text-white sx:flex-col-reverse sx:flex ">
        {/* Text Section */}
        <div className="flex-1 md:px-10 lg:px-10 md:py-6 lg:py-6 lg:w-[50%] md:w-[50%] text-black hover:text-white  sx:p-4   ">
          <h2 className=" lg:text-3xl md:text-3xl sm:text-3xl  font-bold mb-4 sx:text-xl   ">
            Tailored Cleaning Solutions
          </h2>
          <p className=" lg:my-8 md:my-8 sm:my-8 lg:text-lg md:text-lg sm:text-lg sx:my-2 sx:text-sm">
            We offer tailored cleaning solutions for all types of buildings,
            ensuring personalized service.
          </p>
        </div>

        {/* Image and Icon Section */}
        <div className=" lg:flex md:flex sm:flex lg:justify-end md:justify-end sm:justify-end lg:mt-28 md:mt-28 sm:mt-28  relative lg:flex-1 mg:flex-1 sm:flex-1 lg:w-[50%] md:w-[50%] sm:w-[50%] sx:mt-0 ">
          {/* Icon */}
          <div className="absolute -top-1 left-20 text-red-500 bg-white p-4 rounded-full transition-transform duration-500 group-hover:rotate-[360deg] z-40 lg:block md:block  sm:block sx:hidden ">
            <SiCcleaner className="size-10 " />
          </div>

          {/* Image with Zoom Effect */}
          <Image
            alt="img"
            className="lg:rounded-tl-full  md:rounded-tl-full sm:rounded-tl-full transition-transform duration-500 group-hover:scale-105 sx:rounded-none   "
            src="https://images.pexels.com/photos/5591833/pexels-photo-5591833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[510px] h-[330px]  hover:bg-[#1f236f] transition-all duration-500  lg:flex md:flex sm:flex text-white m-0 overflow-hidden relative group shadow-[0px_0px_11px_-4px_rgb(102,102,112)] hover:text-white ">
        {/* Image and Icon Section */}
        <div className="lg:flex md:flex sm:flex lg:justify-end md:justify-end sm:justify-end lg:mt-28 md:mt-28 sm:mt-28  relative lg:flex-1 mg:flex-1 sm:flex-1 lg:w-[50%] md:w-[50%] sm:w-[50%]  sx:mt-0 ">
          {/* Icon */}
          <div className="absolute -top-1 left-20 text-red-500 bg-white p-4 rounded-full transition-transform duration-500 group-hover:rotate-[360deg] z-40 lg:block md:block  sm:block sx:hidden">
            <GiSkills className="size-10 " />
          </div>

          {/* Image with Zoom Effect */}
          <Image
            alt="img"
            className="lg:rounded-tr-full md:rounded-tr-full sm:rounded-tr-full transition-transform duration-500 group-hover:scale-105 sx:rounded-none "
            src="https://images.pexels.com/photos/6195111/pexels-photo-6195111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={300}
            height={300}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 md:px-8 lg:px-8 md:py-8 lg:py-8 lg:w-[50%] md:w-[50%] text-black hover:text-white sx:p-4">
          <h2 className="lg:text-3xl md:text-3xl sm:text-3xl  font-bold mb-4 sx:text-xl ">
            Skilled Professional Team
          </h2>
          <p className="lg:my-8 md:my-8 sm:my-8 lg:text-lg md:text-lg sm:text-lg sx:my-2 sx:text-sm">
            Our skilled team delivers meticulous cleaning with attention to
            detail.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[510px] h-[330px]  hover:bg-[#1f236f] transition-all duration-500  lg:flex md:flex sm:flex-row sm:flex  text-white m-0 overflow-hidden relative group shadow-[0px_0px_11px_-4px_rgb(102,102,112)] hover:text-white sx:flex-col-reverse sx:flex">
        <div className="flex-1 md:px-8 lg:px-8 md:py-8 lg:py-8 lg:w-[50%] md:w-[50%] text-black hover:text-white sx:p-4">
          <h2 className="lg:text-3xl md:text-3xl sm:text-3xl  font-bold mb-4 sx:text-xl ">
            Comprehensive <br /> Cleaning <br /> Services
          </h2>
          <p className="lg:my-8 md:my-8 sm:my-8 lg:text-lg md:text-lg sm:text-lg sx:my-2 sx:text-sm">
            From residential to commercial spaces, we provide comprehensive
            cleaning services.
          </p>
        </div>

        {/* Image and Icon Section */}
        <div className="lg:flex md:flex sm:flex lg:justify-end md:justify-end sm:justify-end lg:mb-28 md:mb-28 sm:mb-28  relative lg:flex-1 mg:flex-1 sm:flex-1 lg:w-[50%] md:w-[50%] sm:w-[50%]  sx:mt-0 ">
          {/* Icon */}
          <div className="absolute  bottom-10 left-4 text-red-500 bg-white p-4 rounded-full transition-transform duration-500 group-hover:rotate-[360deg] z-40 lg:block md:block  sm:block sx:hidden">
            <MdCleanHands className="size-10 " />
          </div>

          {/* Image with Zoom Effect */}
          <Image
            alt="img"
            className="lg:rounded-bl-full md:rounded-bl-full sm:rounded-bl-full transition-transform duration-500 group-hover:scale-105 sx:rounded-none"
            src="https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-[510px] h-[340px]  hover:bg-[#1f236f] transition-all duration-500  lg:flex md:flex sm:flex-row sm:flex  text-white m-0 overflow-hidden relative group shadow-[0px_0px_11px_-4px_rgb(102,102,112)] hover:text-white  ">
        {/* Image and Icon Section */}
        <div className="lg:flex md:flex sm:flex lg:justify-end md:justify-end sm:justify-end lg:mb-28 md:mb-28 sm:mb-28  relative lg:flex-1 mg:flex-1 sm:flex-1 lg:w-[50%] md:w-[50%] sm:w-[50%]  sx:mt-0 ">
          {/* Icon */}
          <div className="absolute bottom-10 right-4 text-red-500 bg-white p-4 rounded-full transition-transform duration-500 group-hover:rotate-[360deg] z-40 lg:block md:block  sm:block sx:hidden">
            <FaHandsWash className="size-10 " />
          </div>

          {/* Image with Zoom Effect */}
          <Image
            alt="img"
            className=" lg:rounded-br-full md:rounded-br-full sm:rounded-br-full transition-transform duration-500 group-hover:scale-105 sx:rounded-none"
            src="https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={300}
            height={300}
          />
        </div>

        {/* Text Section  */}
        <div className="flex-1 md:px-8 lg:px-8 md:py-8 lg:py-8 lg:w-[50%] md:w-[50%] text-black hover:text-white sx:p-4">
          <h2 className="lg:text-3xl md:text-3xl sm:text-3xl  font-bold mb-4 sx:text-xl">
            Commitment to Excellence
          </h2>
          <p className="lg:my-8 md:my-8 sm:my-8 lg:text-lg md:text-lg sm:text-lg sx:my-2 sx:text-sm">
            We’re committed to excellence, guaranteeing cleanliness and a
            healthy environment every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCart;
