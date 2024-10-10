import React from "react";

const AboutBanner = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-[#E63710] to-[#ee6749]  lg:h-[300px] md:h-[300px] sm:h-[300px] sx:h-[380px] mt-20  text-center">
        <h2 className=" text-[#32297C] text-4xl text-center pt-16 font-bold ">
          About Us
        </h2>
        <h3 className="py-2 px-2 rounded-full bg-[#32297C] text-white my-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold lg:w-[450px] md:w-[450px] sm:w-[450px] sx:w-[320px] sx:text-base mx-auto ">
          Your Satisfaction, Our Mission
        </h3>
        <p className="text-white lg:w-[620px] md:w-[620px] sm:w-[520px] sx:w-[320px] mx-auto text-lg">
          NewEco provide top-quality for homes and businesses. Trust us to keep
          your space spotless and inviting. Your satisfaction is our priority!
        </p>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-1"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#ED6344" offset="100%" />
            {/* <stop stopColor="#ed5f3f67" offset="100%" /> */}
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,13L10.9,26C21.8,39,44,65,65,73.7C87.3,82,109,74,131,67.2C152.7,61,175,56,196,52C218.2,48,240,43,262,34.7C283.6,26,305,13,327,26C349.1,39,371,78,393,80.2C414.5,82,436,48,458,36.8C480,26,502,39,524,47.7C545.5,56,567,61,589,62.8C610.9,65,633,65,655,54.2C676.4,43,698,22,720,28.2C741.8,35,764,69,785,69.3C807.3,69,829,35,851,36.8C872.7,39,895,78,916,82.3C938.2,87,960,56,982,41.2C1003.6,26,1025,26,1047,41.2C1069.1,56,1091,87,1113,99.7C1134.5,113,1156,108,1178,93.2C1200,78,1222,52,1244,36.8C1265.5,22,1287,17,1309,30.3C1330.9,43,1353,74,1375,82.3C1396.4,91,1418,78,1440,75.8C1461.8,74,1484,82,1505,82.3C1527.3,82,1549,74,1560,69.3L1570.9,65L1570.9,130L1560,130C1549.1,130,1527,130,1505,130C1483.6,130,1462,130,1440,130C1418.2,130,1396,130,1375,130C1352.7,130,1331,130,1309,130C1287.3,130,1265,130,1244,130C1221.8,130,1200,130,1178,130C1156.4,130,1135,130,1113,130C1090.9,130,1069,130,1047,130C1025.5,130,1004,130,982,130C960,130,938,130,916,130C894.5,130,873,130,851,130C829.1,130,807,130,785,130C763.6,130,742,130,720,130C698.2,130,676,130,655,130C632.7,130,611,130,589,130C567.3,130,545,130,524,130C501.8,130,480,130,458,130C436.4,130,415,130,393,130C370.9,130,349,130,327,130C305.5,130,284,130,262,130C240,130,218,130,196,130C174.5,130,153,130,131,130C109.1,130,87,130,65,130C43.6,130,22,130,11,130L0,130Z"
        ></path>
      </svg>
    </>
  );
};

export default AboutBanner;
