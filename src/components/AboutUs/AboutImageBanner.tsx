import React from 'react'

const AboutImageBanner = () => {
  return (
    <>
      <div
        className="relative h-[400px] bg-cover bg-center bg-fixed "
        style={{
          backgroundImage:
            "url('https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg')",
        }}
      >
        {/* Background overlay (optional, to darken the background) */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Centered text */}
        <div className="relative flex justify-center items-center h-full">
          <h1 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold text-center px-4 w-[1300px]">
            “To Be The Best Leader In Cleaning Services Industry Towards Total
            Quality Excellence”
          </h1>
        </div>
      </div>
    </>
  );
}

export default AboutImageBanner
