'use client'
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceSlideText = () => {
  // Carousel autoplay setup
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      {/* Section 1 */}
      <div>
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 01 */}
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin.current]}
                className="relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234146810-866107b42e5f?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234147641-1e5a1dcf44ad?q=80&w=1974",
                  ].map((singleImage, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={singleImage}
                              alt={`Slide ${index + 1}`}
                              className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:pt-16 md:pt-16 sm:pt-8 sx:pt-3 lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">01</h4>
            <h1 className="text-4xl font-bold text-[#32297C] my-2">
              Interior Maintenance
            </h1>
            <p className="text-lg">
              New Eco provide{" "}
              <span className="text-[#32297C] font-bold">
                top-tier cleaning services on a contractual basis
              </span>
              , covering a wide range of properties, including{" "}
              <span className="text-[#32297C] font-bold">
                residential, commercial, and mixed-use developments.
              </span>{" "}
              Our tailored cleaning solutions ensure that every space, from
              individual homes to large office complexes, is maintained to the
              highest standards, offering a clean and welcoming environment for
              all occupants.
            </p>

            {/* Dropdowns */}
            {[
              {
                title: "Building and Office Cleaning",
                content:
                  "Our professional team provides thorough cleaning services for buildings and offices from residential to mixed-use development buildings, ensuring a pristine and hygienic environment for employees and visitors.",
              },
              {
                title: "Janitorial Services",
                content:
                  "We offer reliable janitorial services, including daily maintenance and cleaning tasks, to keep your facilities in top condition.",
              },
              {
                title: "Refuse Removal",
                content:
                  "We provide efficient refuse removal services to ensure your premises remain clean and free of waste, enhancing overall cleanliness and hygiene.",
              },
              {
                title: "Floor Care and Window Cleaning",
                content:
                  "We specialize in comprehensive floor care to keep your floors well-maintained. Our expert window cleaning services ensure clear, spotless windows, enhancing the overall appearance of your property.",
              },
            ].map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="lg:text-xl md:text-xl sm:text-xl font-bold flex justify-between items-center no-underline text-[#32297C]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-t-0 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Interior Maintenance <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div>
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 02 */}
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Text Section */}
          <div className="lg:pt-16 md:pt-16 sm:pt-8 sx:pt-3 lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">02</h4>
            <h1 className="text-4xl font-bold text-[#32297C] my-2">
              Exterior Maintenance
            </h1>
            <p className="text-lg">
              New Eco provide{" "}
              <span className="text-[#32297C] font-bold">
                top-tier cleaning services on a contractual basis
              </span>
              , covering a wide range of properties, including{" "}
              <span className="text-[#32297C] font-bold">
                residential, commercial, and mixed-use developments.
              </span>{" "}
              Our tailored cleaning solutions ensure that every space, from
              individual homes to large office complexes, is maintained to the
              highest standards, offering a clean and welcoming environment for
              all occupants.
            </p>

            {/* Dropdowns */}
            {[
              {
                title: "Building and Office Cleaning",
                content:
                  "Our professional team provides thorough cleaning services for buildings and offices from residential to mixed-use development buildings, ensuring a pristine and hygienic environment for employees and visitors.",
              },
              {
                title: "Janitorial Services",
                content:
                  "We offer reliable janitorial services, including daily maintenance and cleaning tasks, to keep your facilities in top condition.",
              },
              {
                title: "Refuse Removal",
                content:
                  "We provide efficient refuse removal services to ensure your premises remain clean and free of waste, enhancing overall cleanliness and hygiene.",
              },
              {
                title: "Floor Care and Window Cleaning",
                content:
                  "We specialize in comprehensive floor care to keep your floors well-maintained. Our expert window cleaning services ensure clear, spotless windows, enhancing the overall appearance of your property.",
              },
            ].map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="lg:text-xl md:text-xl sm:text-xl font-bold flex justify-between items-center no-underline text-[#32297C]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-t-0 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Interior Maintenance <FaArrowUp />
            </button>
          </div>

          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin.current]}
                className="relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234146810-866107b42e5f?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234147641-1e5a1dcf44ad?q=80&w=1974",
                  ].map((singleImage, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={singleImage}
                              alt={`Slide ${index + 1}`}
                              className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div>
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 03 */}
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin.current]}
                className="relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234146810-866107b42e5f?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234147641-1e5a1dcf44ad?q=80&w=1974",
                  ].map((singleImage, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={singleImage}
                              alt={`Slide ${index + 1}`}
                              className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:pt-16 md:pt-16 sm:pt-8 sx:pt-3 lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">03</h4>
            <h1 className="text-4xl font-bold text-[#32297C] my-2">
              Special Services
            </h1>
            <p className="text-lg">
              New Eco provide{" "}
              <span className="text-[#32297C] font-bold">
                top-tier cleaning services on a contractual basis
              </span>
              , covering a wide range of properties, including{" "}
              <span className="text-[#32297C] font-bold">
                residential, commercial, and mixed-use developments.
              </span>{" "}
              Our tailored cleaning solutions ensure that every space, from
              individual homes to large office complexes, is maintained to the
              highest standards, offering a clean and welcoming environment for
              all occupants.
            </p>

            {/* Dropdowns */}
            {[
              {
                title: "Building and Office Cleaning",
                content:
                  "Our professional team provides thorough cleaning services for buildings and offices from residential to mixed-use development buildings, ensuring a pristine and hygienic environment for employees and visitors.",
              },
              {
                title: "Janitorial Services",
                content:
                  "We offer reliable janitorial services, including daily maintenance and cleaning tasks, to keep your facilities in top condition.",
              },
              {
                title: "Refuse Removal",
                content:
                  "We provide efficient refuse removal services to ensure your premises remain clean and free of waste, enhancing overall cleanliness and hygiene.",
              },
              {
                title: "Floor Care and Window Cleaning",
                content:
                  "We specialize in comprehensive floor care to keep your floors well-maintained. Our expert window cleaning services ensure clear, spotless windows, enhancing the overall appearance of your property.",
              },
            ].map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="lg:text-xl md:text-xl sm:text-xl font-bold flex justify-between items-center no-underline text-[#32297C]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-t-0 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Interior Maintenance <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div>
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 04 */}
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Text Section */}
          <div className="lg:pt-16 md:pt-16 sm:pt-8 sx:pt-3 lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">04</h4>
            <h1 className="text-4xl font-bold text-[#32297C] my-2">
              Initial Cleaning Services
            </h1>
            <p className="text-lg">
              New Eco provide{" "}
              <span className="text-[#32297C] font-bold">
                top-tier cleaning services on a contractual basis
              </span>
              , covering a wide range of properties, including{" "}
              <span className="text-[#32297C] font-bold">
                residential, commercial, and mixed-use developments.
              </span>{" "}
              Our tailored cleaning solutions ensure that every space, from
              individual homes to large office complexes, is maintained to the
              highest standards, offering a clean and welcoming environment for
              all occupants.
            </p>

            {/* Dropdowns */}
            {[
              {
                title: "Building and Office Cleaning",
                content:
                  "Our professional team provides thorough cleaning services for buildings and offices from residential to mixed-use development buildings, ensuring a pristine and hygienic environment for employees and visitors.",
              },
              {
                title: "Janitorial Services",
                content:
                  "We offer reliable janitorial services, including daily maintenance and cleaning tasks, to keep your facilities in top condition.",
              },
              {
                title: "Refuse Removal",
                content:
                  "We provide efficient refuse removal services to ensure your premises remain clean and free of waste, enhancing overall cleanliness and hygiene.",
              },
              {
                title: "Floor Care and Window Cleaning",
                content:
                  "We specialize in comprehensive floor care to keep your floors well-maintained. Our expert window cleaning services ensure clear, spotless windows, enhancing the overall appearance of your property.",
              },
            ].map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="lg:text-xl md:text-xl sm:text-xl font-bold flex justify-between items-center no-underline text-[#32297C]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-t-0 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Interior Maintenance <FaArrowUp />
            </button>
          </div>
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin.current]}
                className="relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234146810-866107b42e5f?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234147641-1e5a1dcf44ad?q=80&w=1974",
                  ].map((singleImage, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={singleImage}
                              alt={`Slide ${index + 1}`}
                              className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div>
        <hr className="border-[1px] border-red-500 my-2 " />
        {/* ServiceSlide 05 */}
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Carousel Section */}
          <div>
            <div className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px] lg:my-12 md:my-12 sm:my-6 sx:my-4">
              <Carousel
                plugins={[plugin.current]}
                className="relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234146810-866107b42e5f?q=80&w=1974",
                    "https://plus.unsplash.com/premium_photo-1677234147641-1e5a1dcf44ad?q=80&w=1974",
                  ].map((singleImage, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0">
                            <img
                              src={singleImage}
                              alt={`Slide ${index + 1}`}
                              className="lg:w-[400px] md:w-[400px] sm:w-[400px] sx:w-[300px] lg:h-[550px] md:h-[550px] sm:h-[550px] sx:h-[450px]"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Position left arrow */}
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white">
                  <MdOutlineKeyboardArrowLeft />
                </CarouselPrevious>

                {/* Position right arrow */}
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 hover:text-white text-red-600 p-2 rounded-full">
                  <MdOutlineKeyboardArrowRight />
                </CarouselNext>
              </Carousel>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:pt-16 md:pt-16 sm:pt-8 sx:pt-3 lg:px-8 md:px-8 sm:px-5 sx:px-2">
            <h4 className="text-4xl text-red-600 font-bold">Emergency</h4>
            <h1 className="text-4xl font-bold text-[#32297C] my-2">
              Mobile Team
            </h1>
            <p className="text-lg">
              New Eco provide{" "}
              <span className="text-[#32297C] font-bold">
                top-tier cleaning services on a contractual basis
              </span>
              , covering a wide range of properties, including{" "}
              <span className="text-[#32297C] font-bold">
                residential, commercial, and mixed-use developments.
              </span>{" "}
              Our tailored cleaning solutions ensure that every space, from
              individual homes to large office complexes, is maintained to the
              highest standards, offering a clean and welcoming environment for
              all occupants.
            </p>

            {/* Dropdowns */}
            {[
              {
                title: "Building and Office Cleaning",
                content:
                  "Our professional team provides thorough cleaning services for buildings and offices from residential to mixed-use development buildings, ensuring a pristine and hygienic environment for employees and visitors.",
              },
              {
                title: "Janitorial Services",
                content:
                  "We offer reliable janitorial services, including daily maintenance and cleaning tasks, to keep your facilities in top condition.",
              },
              {
                title: "Refuse Removal",
                content:
                  "We provide efficient refuse removal services to ensure your premises remain clean and free of waste, enhancing overall cleanliness and hygiene.",
              },
              {
                title: "Floor Care and Window Cleaning",
                content:
                  "We specialize in comprehensive floor care to keep your floors well-maintained. Our expert window cleaning services ensure clear, spotless windows, enhancing the overall appearance of your property.",
              },
            ].map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="lg:text-xl md:text-xl sm:text-xl font-bold flex justify-between items-center no-underline text-[#32297C]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-t-0 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <button className="bg-[#32297C] text-white flex justify-center items-center gap-1 px-4 py-2 rounded-full text-base hover:bg-red-600 my-2">
              Interior Maintenance <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlideText;
