import Footer from '@/components/Home/Footer/Footer'
import Navber from '@/components/Home/navigation/Navber'
import ProjectBanner from '@/components/Projects/ProjectBanner'
import ProjectFilterButton from '@/components/Projects/ProjectFilterButton'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navber/>
      <ProjectBanner/>
      <ProjectFilterButton/>
      
      <Footer/>
    </div>
  )
}

export default page
