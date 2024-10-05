import React from "react";
import { FaAward } from "react-icons/fa";

const Whatwedo = () => {
  return (
    <div className="relative h-[400px] w-full clip-path-wave2 my-16">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-red-600 z-0"></div>

      {/* Gradient Section */}
      <div className="absolute inset-0 h-full bg-gradient-to-t from-[#ee4b2b] to-[#e84545] z-10"></div>

      {/* Top Blur Effect */}
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-white/95 to-transparent backdrop-blur-xl z-20"></div>

      {/* Content Section */}
      <div className="relative z-30">
        {/* Text Section */}
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl sx:text-sm font-bold bg-[#33297C] p-2 md:w-[480px] lg:w-[480px] sm:w-[390px] sx:w-[290px] mx-auto text-center rounded-full text-white my-8">
          Choosing AUCS: Your Smart Decision
        </h2>
        <h1 className="text-[#33297C] font-bold lg:text-4xl md:text-4xl sm:text-3xl sx:text-xl mx-auto text-center mb-10">
          Cleaning Is What We Do Best
        </h1>

        {/* Card Section */}
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#191150] border-2 border-white p-6 rounded-xl text-center z-30">
              <FaAward className="mx-auto size-16 mb-4 text-white" />
              <h2 className="text-white text-4xl font-semibold mb-4">
                Professional
              </h2>
              <p className="text-white">Standard Maintenance</p>
              <p className="text-white">Excellent Services</p>
              <p className="text-white">Strengthen Relationships</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#191150] border-2 border-white p-6 rounded-lg z-30">
              <h2 className="text-white text-xl font-semibold mb-4">Card 2</h2>
              <p className="text-white">This is card 2 content.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#191150] border-2 border-white p-6 rounded-lg z-30">
              <h2 className="text-white text-xl font-semibold mb-4">Card 3</h2>
              <p className="text-white">This is card 3 content.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#191150] border-2 border-white p-6 rounded-lg z-30 h-96">
              <h2 className="text-white text-xl font-semibold mb-4">Card 4</h2>
              <p className="text-white">This is card 4 content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
