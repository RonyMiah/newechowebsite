"use client";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import clean1 from "@/assets/clean1.jpg";
import clean2 from "@/assets/clean2.jpg";
import clean3 from "@/assets/clean3.jpg";
import Image from "next/image";
import AnimationIcon from "../../../assets/lottieicon.json";
import Lottie from "lottie-react";
import Link from "next/link";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <div className="relative h-screen md:h-[500px] clip-path-wave mt-20 ">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center  "
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e83b18] to-[#4E2A71] opacity-80 "></div>

        {/* Content: Text and Carousel */}
        <div className="relative z-30  flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 p-4 container pt-24">
          {/* Text Section */}
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-4xl font-bold ">
              <p className="md:text-start lg:text-start">
                Your Trusted Partner for Expert
              </p>
              <p className="md:text-start lg:text-start">
                {" "}
                <span className="text-[#33297C]"> Cleaning</span> and
                Maintenance
              </p>
              <p className="md:text-start lg:text-start">Solutions</p>
            </h1>

            <div className="flex md:justify-start lg:justify-start sm:justify-center sx:justify-center items-center gap-8 mt-8">
              <Link
                href="https://drive.google.com/file/d/1ORlxjw4H7_kJZ7Id2HqaciCWcV1k2N-N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`rounded-full transition-all duration-300  ${
                    hovered
                      ? "!bg-[#33297C] !text-white"
                      : "bg-transparent border border-white text-white"
                  }`}
                  variant="outline"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {hovered ? "Our Company Profile" : "Learn More"}
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button className="bg-[#33297C] rounded-full">
                  {" "}
                  Get In Touch{" "}
                </Button>
              </Link>
            </div>
            <div className="w-40 flex justify-center items-center ms-16">
              <Lottie animationData={AnimationIcon} loop={true} />
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
    </div>
  );
};

export default HeroSection;
