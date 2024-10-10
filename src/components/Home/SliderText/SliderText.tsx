'use client'
import React from 'react'
import clean1 from "@/assets/clean1.jpg";
import clean2 from "@/assets/clean2.jpg";
import clean3 from "@/assets/clean3.jpg";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

const SliderText = () => {



    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    );


  return (
    <div className="container md:px-28  lg:px-28 my-12 flex gap-10 sm:flex-wrap  sx:flex-wrap lg:flex-nowrap md:flex-nowrap ">
      {/* Carousel Section */}
      <div className="text-center  ">
        <Carousel
          plugins={[plugin.current]}
          className="lg:w-[420px] md:w-[420px] sm:w-[320px]  sx:w-[300px] "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="">
            {/* Manually adding static content for each carousel item */}
            <CarouselItem className="">
              <Card className="">
                <CardContent className="flex lg:h-[550px] md:h-[550px]  items-center justify-center  p-0 sm:h-[450px] sx:h-[400px] ">
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
                <CardContent className="flex lg:h-[550px] md:h-[550px]  items-center justify-center  p-0 sm:h-[450px] sx:h-[400px] ">
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
                <CardContent className="flex lg:h-[550px] md:h-[550px]  items-center justify-center  p-0 sm:h-[450px] sx:h-[400px] ">
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

      {/* Text Section  */}

      <div className="p-2">
        <h1 className="text-4xl text-[#33297C] font-bold ">
          Redefining Excellence Cleaning Services
        </h1>
        <p className="my-6 text-lg">
          At AUCS, integrity and reliability are our foundation. We’re known for
          expertise, professionalism and a commitment to excellence. Our mission
          is clear: to provide{" "}
          <span className="text-[#33297C] font-bold"> top-notch cleaning</span>
          and{" "}
          <span className="text-[#33297C] font-bold">janitorial services </span>
          tailored to all kinds of properties in{" "}
          <span className='className="text-[#33297C] font-bold"'>
            {" "}
            Peninsula Malaysia.
          </span>{" "}
        </p>
        <p className="my-6 text-lg">
          We’re changing the game in cleaning services with our dedication to
          excellence and professionalism. With one of the largest full-time
          staff teams in the region, we ensure they’re always trained to meet
          <span className="text-[#33297C] font-bold"> high standards.</span>
        </p>

        <p className="my-6 text-md">
          Count on us to exceed your cleaning needs for offices, homes and
          facilities. We understand how cleanliness impacts productivity and
          well-being. Our goal isn’t just to clean, but to build{" "}
          <span className="text-[#33297C] text-lg font-bold"> lasting trust </span> by
          going above and beyond every time.
        </p>
      </div>
    </div>
  );
}

export default SliderText
