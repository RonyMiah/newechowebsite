import AboutBanner from '@/components/AboutUs/AboutBanner';
import AboutCard from '@/components/AboutUs/AboutCard';
import AboutCleaning from '@/components/AboutUs/AboutCleaning';
import AboutImageBanner from '@/components/AboutUs/AboutImageBanner';
import TextScroll from '@/components/AboutUs/TextScroll';
import Footer from '@/components/Home/Footer/Footer';
import Navber from '@/components/Home/navigation/Navber';
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
      <Navber />
       <AboutBanner/>
       <AboutCleaning/>
       <AboutCard/>
       <TextScroll/>
       <AboutImageBanner/>
      <Footer />
    </>
  );
}

export default AboutUsPage;
