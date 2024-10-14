import Link from 'next/link';
import React from 'react'

const ReachOut = () => {
  return (
    <div className="py-14 mx-auto text-center bg-gradient-to-b from-[#32297C] to-[#4c4386]   ">
      <h1 className="text-4xl font-bold text-white">Connect with Us Today</h1>
      <hr className="border-1.8 mx-auto border-red-600 lg:w-96 md:w-96 sm:w-96 sx:w-64 my-6" />
      <p className="text-white text-center mx-auto lg:w-[600px] md:w-[600px] sm:w-[600px] sx:w-[300px] text-lg">
        Want to learn more or see how we can help? Click the button below and
        let’s connect! Your Clean Spaces Await!
      </p>
      <Link href="/contact-us">
        <button className="rounded-full bg-red-600 py-2 px-4 text-white mt-6 hover:bg-[#32297C] ">
          Get In Touch
        </button>
      </Link>
    </div>
  );
}

export default ReachOut
