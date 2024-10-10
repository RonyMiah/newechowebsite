"use client";

import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import clean1 from "@/assets/clean1.jpg";
import clean2 from "@/assets/clean2.jpg";
import clean3 from "@/assets/clean3.jpg";
import { FaCheckDouble } from "react-icons/fa";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const AboutCard = () => {
  const [hovered, setHovered] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="mt-16">
      <hr className="border-[1px] border-red-500  " />
      {/* Section 1 */}
      <div className="bg-[#F2F5F7] py-8 ">
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Carousel Section */}
          <div className="text-center  ">
            <Carousel
              plugins={[plugin.current]}
              className="lg:w-[530px] md:w-[380px] sm:w-[430px]  sx:w-[320px] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {/* Manually adding static content for each carousel item */}
                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean1}
                        alt="Image 1"
                        className="w-full h-full object-fill rounded-xl  "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0  sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean2}
                        alt="Image 2"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean3}
                        alt="Image 3"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* text Section  */}
          <div className="lg:w-[50%] bg-[#F2F5F7] rounded-lg p-12 mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-red-600 ">
              HR Briefing & Operations Training
            </h1>

            <h4 className="text-xl font-bold text-[#352B7D] ">9 June 2024</h4>

            <div className="my-3">
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Attendance Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Casual Wages Administration</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Machinery Inventory Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Order List Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Project Scheduling and Planning</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" py-8">
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* text Section  */}
          <div className="lg:w-[50%]  rounded-lg p-12 mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-red-600 ">
              HR Briefing & Operations Training
            </h1>

            <h4 className="text-xl font-bold text-[#352B7D] ">9 June 2024</h4>

            <div className="my-3">
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Attendance Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Casual Wages Administration</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Machinery Inventory Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Order List Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Project Scheduling and Planning</span>
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="text-center  ">
            <Carousel
              plugins={[plugin.current]}
              className="lg:w-[530px] md:w-[380px] sm:w-[430px]  sx:w-[320px] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {/* Manually adding static content for each carousel item */}
                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean1}
                        alt="Image 1"
                        className="w-full h-full object-fill rounded-xl  "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0  sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean2}
                        alt="Image 2"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean3}
                        alt="Image 3"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#F2F5F7] py-8  ">
        <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
          {/* Carousel Section */}
          <div className="text-center  ">
            <Carousel
              plugins={[plugin.current]}
              className="lg:w-[530px] md:w-[380px] sm:w-[430px]  sx:w-[320px] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {/* Manually adding static content for each carousel item */}
                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean1}
                        alt="Image 1"
                        className="w-full h-full object-fill rounded-xl  "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0  sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean2}
                        alt="Image 2"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                      <Image
                        src={clean3}
                        alt="Image 3"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* text Section  */}
          <div className="lg:w-[50%] bg-[#F2F5F7] rounded-lg p-12 mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-red-600 ">
              HR Briefing & Operations Training
            </h1>

            <h4 className="text-xl font-bold text-[#352B7D] ">9 June 2024</h4>

            <div className="my-3">
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Attendance Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Casual Wages Administration</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Machinery Inventory Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Order List Management</span>
              </p>
              <p className="flex justify-start gap-2 items-center">
                <FaCheckDouble className="text-red-600" />{" "}
                <span>Project Scheduling and Planning</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
