'use client'

import React from 'react'
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <div className="bg-white my-10 text-center sm:text-left mt-20">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:mt-0 sx:grid-cols-1 lg:grid-cols-5 sm:mt-80 gap-8 sm:gap-16 text-center sx: mt-[900px]">
          {/* Experience */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-red-600">
                <CountUp end={15} duration={2} />+ 
              </h2>
            </div>
            <p className="text-md mt-2">Years Of Experience</p>
          </div>
          {/* Area Supervisors */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-red-600">
                <CountUp end={4} duration={2} />+
              </h2>
            </div>
            <p className="text-lg mt-2">Area Supervisors</p>
          </div>
          {/* Supervisors & Team Leaders */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-red-600 ">
                <CountUp end={80} duration={2} />+
              </h2>
            </div>
            <p className="text-md mt-2">Supervisors & Team Leaders</p>
          </div>
          {/* Skilled Cleaners */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-red-600">
                <CountUp end={1000} duration={2} />+
              </h2>
            </div>
            <p className="text-md mt-2">Skilled Cleaners</p>
          </div>
          {/* Projects */}
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-red-600">
                <CountUp end={90} duration={2} />+
              </h2>
            </div>
            <p className="text-md mt-2">Projects</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter
