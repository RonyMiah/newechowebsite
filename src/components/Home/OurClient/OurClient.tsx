import React from 'react'
import Image from "next/image";

import logo1 from '../../../assets/company/GSC-Cinema-Vector-Logo-removebg-preview.jpg'
import logo2 from '../../../assets/company/HBMK-logo-removebg-preview.jpg'
import logo3 from '../../../assets/company/M-TRUSTEE-BERHARD-LOGO-3-1.png'
import logo4 from '../../../assets/company/Pavilion_Bukit_Jalil_Mall_Logo.jpg'
import logo5 from '../../../assets/company/Transpacc-logo-new-1024x166-2.png'
import logo6 from '../../../assets/company/burgess-rawson.png'
import logo7 from '../../../assets/company/dumc.png'
import logo8 from '../../../assets/company/logo-1-1.png'
import logo9 from '../../../assets/company/lv.png'
import logo10 from '../../../assets/company/mah-sing.png'
import logo11 from '../../../assets/company/malton.png'
import logo12 from '../../../assets/company/pv.png'

const OurClient = () => {

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12
  ];


  return (
    <div className=" md:px-16  lg:px-16 my-6  ">
      <h2 className=" text-center text-[#33297C] font-bold text-4xl mx-auto my-6">
        Our Clients
      </h2>

      <div className="flex flex-wrap  justify-items-center items-center ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="sx:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4  p-4  flex justify-center items-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className= {`${logo === logo8 ? 'w-[100px] h-[100px]' : 'w-[300px] h-[90px]' }`}
              width={300}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClient
