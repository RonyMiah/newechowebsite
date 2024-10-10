import Footer from '@/components/Home/Footer/Footer'
import Navber from '@/components/Home/navigation/Navber'
import ServiceBanner from '@/components/Services/ServiceBanner/ServiceBanner'
import ServiceCard from '@/components/Services/ServiceBanner/ServiceCard'
import ServiceSlideText from '@/components/Services/ServiceSlideText'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navber />
      <ServiceBanner />
      <ServiceCard />
      <ServiceSlideText />
      <Footer />
    </div>
  );
}

export default page
