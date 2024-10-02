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

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <div className="relative h-screen md:h-[500px] clip-path-wave z- ">
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center  "
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e83b18] to-[#4E2A71] opacity-85 "></div>

        {/* Content: Text and Carousel */}
        <div className="relative z-30  flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 p-4 container pt-24">
          {/* Text Section */}
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-4xl font-bold ">
              <p className="text-start">Your Partner for Professional</p>
              <p className="text-start">
                {" "}
                <span className="text-[#33297C]"> Cleaning</span> Maintenance
              </p>
              <p className="text-start">Services</p>
            </h1>

            <div className="flex justify-start items-center gap-6 mt-8">
              <Button
                className={`rounded-full transition-all duration-300  ${
                  hovered
                    ? "bg-red-900 text-white"
                    : "bg-transparent border border-white text-white"
                }`}
                variant="outline"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? "Our Company Profile" : "Learn More"}
              </Button>

              <Button className="bg-[#33297C] rounded-full">
                {" "}
                Get In Touch{" "}
              </Button>
            </div>
            <div className="w-32 flex justify-center items-center ms-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 442.136"
              >
                <path d="M13.465 0c31.386 25.229 67.041 47.435 83.064 62.714 5.281 5.036 11.006 12.153 1.663 8.574-25.872-9.91-54.003-27.667-75.003-49.744 2.547 18.498-2.366 41.616-9.997 60.504-.938 2.328-3.886 11.918-7.546 15.088-1.359 1.178-2.82 1.473-4.308.18C.489 96.578.059 95.321.005 93.61c-.152-4.983 3.388-19.558 6.693-33.835C11.603 38.592 14.12 21.992 13.465 0z" />
                <path d="M268.172 205.788c-4.322 22.157-5.797 44.279-4.95 66.743-45.792-16.983-86.744-47.759-120.988-82.095-41.377-41.486-75.893-91.78-100.677-142.433-7.709-15.756-12.142-22.106-22.78-36.215 19.82 95.783 137.212 251.196 246.697 274.193C279.782 412.974 408.945 495.853 512 401.432c-95.354 64.986-210.522 25.748-234.658-113.479 11.685 1.413 23.233 1.218 34.515-.824 26.693-4.83 52.462-12.783 72.736-38.719 28.125-35.979 26.324-94.975-19.286-115.588-54.862-24.791-87.927 25.74-97.135 72.966zm7.016 67.488c-.889-23.576 1.128-48.171 6.111-71.196 8.03-37.107 29.726-69.192 65.407-62.82 22.084 3.943 35.695 18.675 40.56 38.116 17.522 70.029-62.617 107.875-112.078 95.9z" />
              </svg>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="text-center  ">
            <Carousel
              plugins={[plugin.current]}
              className="w-[530px]  "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="">
                {/* Manually adding static content for each carousel item */}
                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex h-[300px]  items-center justify-center  p-0 ">
                      <Image
                        src={clean1}
                        alt="Image 1"
                        className="w-full h-full object-fill rounded-xl "
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="">
                  <Card className="">
                    <CardContent className="flex h-[300px]  items-center justify-center  p-0 ">
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
                    <CardContent className="flex h-[300px]  items-center justify-center  p-0 ">
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
