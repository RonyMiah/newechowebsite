import React from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";


const CartItems = () => {
  return (
    <div className="container flex gap-7 flex-wrap justify-center items-center lg:-mt-12  md:-mt-12 relative z-40 sm:mt-2 sx:mt-5 ">
      <div className=" rounded-lg z-50 w-[400px]  h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4 bg-white j">
        <div className="">
          <FaAssistiveListeningSystems className="bg-[#33297C] p-3 size-16 text-red-700 text-2xl rounded-full " />
        </div>
        <div>
          <h3 className="text-xl font-bold">We Listen</h3>
          <p className="my-2">
            AUCS prioritize listening to our clients &apos; cleaning needs to
            deliver tailored solutions.
          </p>
        </div>
      </div>
      <div className=" rounded-lg z-50 w-[400px]  h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4 bg-white j">
        <div className="">
          <FaHandshakeSimple className="bg-[#33297C] p-3 size-16 text-red-700 text-2xl rounded-full " />
        </div>
        <div>
          <h3 className="text-xl font-bold">We Think Along</h3>
          <p className="my-2">
            AUCS work hand in hand with our clients to tackle any cleaning
            issues together, ensuring swift and effective solutions tailored to
            their needs.
          </p>
        </div>
      </div>
      <div className=" rounded-lg z-50 w-[400px]  h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4 bg-white j">
        <div className="">
          <FaBusinessTime className="bg-[#33297C] p-3 size-16 text-red-700 text-2xl rounded-full " />
        </div>
        <div>
          <h3 className="text-xl font-bold">We Are Fast</h3>
          <p className="my-2">
            AUCS quickly resolve manpower shortages and ensure cleanliness
            standards are maintained to provide efficient service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
