"use client";

import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import clean1 from "@/assets/about-1.jpg";
import clean2 from "@/assets/about-2.jpg";
import clean3 from "@/assets/about-3.jpg";
import clean4 from "@/assets/about-4.jpg";
import clean5 from "@/assets/about-5.jpeg"
import clean6 from "@/assets/about-6.jpg";

import { FaCheckDouble } from "react-icons/fa";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const AboutCard = () => {
  const [hovered, setHovered] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin1 = React.useRef(
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
            {/* <h1 className="text-4xl font-bold mb-4 text-red-600 ">
              HR Briefing & Operations Training
            </h1> */}

            {/* <h4 className="text-xl font-bold text-[#352B7D] ">9 June 2024</h4> */}

            <div className="my-3">
              <p className="flex justify-start gap-2 items-center  text-xl">
                We understand that a clean working environment enhances the
                productivity, health and work experience of your employees,
                improving morale and increasing efﬁciency. We work hard to earn
                your trust and conﬁdence, going beyond just meeting your
                business’s daily cleaning needs. NEW ECO comprehensive range of
                cleaning services includes: Interior Maintenance, Exterior
                Maintenance, Special Services, Value Added Services, Post
                construction cleaning, Spring cleaning, Carpet and upholstery
                cleaning, External facade cleaning, Mattress & Sofa Cleaning,
                External Glass Windows Cleaning, Maintenance cleaning, General,
                cleaning or Deep cleaning, Disinfecting service, Air
                conditioning service, Export Import service and Manpower
                service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <hr className="border-[1px] border-red-500 " />
        <div className=" py-8">
          <div className="lg:container md:container justify-center items-center lg:px-28 md:px-10 sm:px-8 sx:px-6 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap ">
            {/* text Section  */}
            <div className="lg:w-[50%]  rounded-lg p-12 mx-auto">
              {/* <h1 className="text-4xl font-bold mb-4 text-red-600 ">
              HR Briefing & Operations Training
            </h1> */}

              {/* <h4 className="text-xl font-bold text-[#352B7D] ">9 June 2024</h4> */}

              <div className="my-3">
                <p className="flex justify-start gap-2 items-center  text-xl">
                  At, NEW ECO, we understand that establishing positive and
                  effective leadership is a key factor in providing our
                  customers with excellent services. We also implement Health &
                  Safety and Recycling Policies that have been through both
                  experience and knowledge and are in line with the best
                  practice management.
                </p>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="text-center  ">
              <Carousel
                plugins={[plugin1.current]}
                className="lg:w-[530px] md:w-[380px] sm:w-[430px]  sx:w-[320px] "
                onMouseEnter={plugin1.current.stop}
                onMouseLeave={plugin1.current.reset}
              >
                <CarouselContent className="">
                  {/* Manually adding static content for each carousel item */}
                  <CarouselItem className="">
                    <Card className="">
                      <CardContent className="flex lg:h-[300px] md:h-[300px]  items-center justify-center  p-0 sm:h-[220px] sx:h-[160px] ">
                        <Image
                          src={clean4}
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
                          src={clean5}
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
                          src={clean6}
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
        {/* <hr className="border-[1px] border-red-500 my-6 " /> */}
      </div>

      {/* Vision and Mission  */}

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Vision Section */}
        <section className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-[#32297C]">
            Vision
          </h1>
          <p className="text-base lg:text-lg text-gray-700 text-center max-w-4xl mx-auto">
            We are constantly working to be recognized by our clients, employees
            and the industry as the most respected and the leading provider of
            contract cleaning services and facilities support services in
            Malaysia.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-[#32297C]">
            Mission
          </h1>
          <p className="text-base lg:text-lg text-gray-700 text-center max-w-4xl mx-auto">
            We are committed to providing the highest quality commercial
            cleaning service available by exceeding the expectations of our
            clients, as well as their employees and visitors to their premises
            or facilities through continuous improvements in Quality, Services,
            and Productivity.
          </p>
        </section>

        {/* Management Functions Section */}
        <section className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-[#32297C]">
            Management Functions
          </h1>
          <p className="text-base lg:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-6">
            Our internal online management system ensures that our team adheres
            to the following four major management functions:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Planning */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#32297C] mb-3">
                Planning
              </h3>
              <p className="text-gray-700">
                Deﬁning goals, establishing strategy, and developing sub-plans
                to coordinate activities through a ﬂexible management approach.
              </p>
            </div>

            {/* Organizing */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#32297C] mb-3">
                Organizing
              </h3>
              <p className="text-gray-700">
                Determining what needs to be done, how it will be done, and who
                is to do it.
              </p>
            </div>

            {/* Leading */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#32297C] mb-3">Leading</h3>
              <p className="text-gray-700">
                Directing and motivating all relevant stakeholders through
                in-house and on-site training, employee suggestions, and conﬂict
                resolution.
              </p>
            </div>

            {/* Controlling */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#32297C] mb-3">
                Controlling
              </h3>
              <p className="text-gray-700">
                Regular audits and maintenance activities are executed to ensure
                that tasks are accomplished as planned, with outcomes reviewed
                and evaluated with the aim of continuous improvement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutCard;
