import ContactBanner from '@/components/ContactUs/ContactBanner'
import ContactForm from '@/components/ContactUs/ContactForm'
import Navber from '@/components/Home/navigation/Navber'
import React from 'react'

const page = () => {
  return (
    <>
      <Navber />
      <ContactBanner/>
    <ContactForm/>



      <div>
        <hr className="border-[1px] border-red-500  " />
        <div className="text-center py-5">
          © 2024 New Eco Cleaning Services. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default page
