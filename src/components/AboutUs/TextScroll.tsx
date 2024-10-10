"use client";

import React from "react";
import Marquee from "react-marquee-slider";
import { times } from "lodash";

const TextScroll: React.FC = () => {
  return (
    <div className="w-full py-8">
      <Marquee
        velocity={20}
        direction="rtl"
        scatterRandomly={false}
        resetAfterTries={3} // Adding the missing prop
        onInit={() => console.log("Marquee initialized")} // Optional: Handle marquee initialization
        onFinish={() => console.log("Marquee finished")} // Optional: Handle when marquee finishes scrolling
      >
        {times(15, (id) => (
          <div
            key={id}
            className="outlined-text text-3xl md:text-3xl lg:text-3xl font-bold mx-3"
          >
            NEWECO CLEANING SERVICES 🚀
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TextScroll;
