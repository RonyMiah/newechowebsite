import React from "react";
import { FaAward, FaUsers, FaCogs, FaShieldAlt } from "react-icons/fa";

const Whatwedo = () => {
  return (
    <div className="my-16">
      <div className="relative h-[370px] w-full  bg-[#E73612]  ">
        {/* Top Gradient Section */}
        <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-white/95 to-transparent backdrop-blur-xl "></div>

        {/* Content Section */}
        <div className="relative z-10 text-center py-10">
          {/* Heading */}
          <h2 className="lg:text-2xl md:text-2xl sm:text-xl sx:text-sm font-bold bg-[#33297C] p-2 md:w-[480px] lg:w-[480px] sm:w-[390px] sx:w-[290px] mx-auto text-white rounded-full my-8 ">
            Choosing AUCS: Your Smart Decision
          </h2>
          <h1 className="text-[#33297C] font-bold lg:text-4xl md:text-4xl sm:text-3xl sx:text-xl mx-auto text-center mb-10">
            Cleaning Is What We Do Best
          </h1>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E73612"
          fill-opacity="1"
          d="M0,224L1440,160L1440,0L0,0Z"
        ></path>
      </svg>

      {/* Card Section */}
      <div className="container mx-auto py-8 px-4 lg:-mt-[475px] md:-mt-[260px] sm:-mt-[208px] sx:-mt-[180px]">
        <div className="grid grid-cols-1  mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-1 h-80 ">
          {/* Card 1 */}
          <div className="bg-[#191150] border-2 border-white p-6 rounded-3xl text-center relative z-20 shadow-lg w-72 hover:bg-[#E73612] hover:text-white">
            <FaAward className="mx-auto text-6xl mb-4 text-white" />
            <span className="text-white text-xl "> 01 </span>
            <h2 className="text-white text-4xl font-semibold mb-2">
              Professional
            </h2>
            <p className="text-white text-lg">Standard Maintenance</p>
            <p className="text-white text-lg">Excellent Services</p>
            <p className="text-white text-lg">Strengthen Relationships</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#191150] border-2 border-white p-6 rounded-3xl text-center relative z-20 shadow-lg w-72 hover:bg-[#E73612] hover:text-white">
            <FaUsers className="mx-auto text-6xl  mb-4 text-white" />
            <span className="text-white text-xl"> 02 </span>
            <h2 className="text-white text-4xl font-semibold mb-2">
              Mobile Team
            </h2>
            <p className="text-white text-lg">Standby 24/7</p>
            <p className="text-white text-lg">Stationed Dormitory</p>
            <p className="text-white text-lg">Attend Emergencies</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#191150] border-2 border-white p-6 rounded-3xl text-center relative z-20 shadow-lg w-72 hover:bg-[#E73612] hover:text-white">
            <FaCogs className="mx-auto text-6xl  mb-4 text-white" />
            <span className="text-white text-xl"> 03 </span>
            <h2 className="text-white  text-4xl font-semibold mb-2">
              Machinery
            </h2>
            <p className="text-white text-lg">Full Listed On Hand</p>
            <p className="text-white text-lg">Guarantee Services</p>
            <p className="text-white text-lg">Own Equipment & Supplies</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#191150] border-2 border-white p-6 rounded-3xl text-center relative z-20 shadow-lg w-72 hover:bg-[#E73612] hover:text-white">
            <FaShieldAlt className="mx-auto text-6xl mb-4 text-white" />
            <span className="text-white text-xl"> 04 </span>
            <h2 className="text-white text-4xl font-semibold mb-2 ">
              Insurance
            </h2>
            <p className="text-white text-lg">RM5,000,000 (Five Million)</p>
            <p className="text-white text-lg">Public Liabilities</p>
            <p className="text-white text-lg">Foreign Workers Compensation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
