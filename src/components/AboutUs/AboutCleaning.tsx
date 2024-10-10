import Image from 'next/image';
import React from 'react'

const AboutCleaning = () => {
  return (
    <div className="lg:container  justify-center items-center lg:px-28 md:px-4 sm:px-4 sx:px-2 flex sx:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap lg:gap-2 md:gap-4 sm:gap-6 sx:gap-6 my-8">
      <div className="lg:w-[50%]">
        <Image
          src={
            "https://ecoglowcleaning.com/wp-content/uploads/2022/11/Cleaning-service-employees-wit.jpg"
          }
          alt="about image"
          height={1200}
          width={1200}
          className="rounded-3xl lg:h-[500px] lg:w-[600px] md:h-[450px] md:w-[800px] sm:h-[350px] sm:w-[800px] sx:h-[300px] sx:w-[800px] mx-auto "
        />
      </div>

      {/* text Section  */}
      <div className="lg:w-[50%] bg-[#F2F5F7] rounded-lg p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-4">About AU Cleaning Services</h1>
        <p>
          AU Cleaning Services Sdn. Bhd. (AUCS), previously recognized as Awana
          Unggul Sdn. Bhd., commenced its operations in 2005 with a primary
          focus on delivering exceptional cleaning and gardening maintenance
          services in the Klang Valley. It was rebranded as AUCS in 2013,
          expanding its services to include residential, commercial and
          mixed-use developments such as offices and retail outlets.
        </p>
        <p className="my-4">
          With a focus on honesty, trustworthiness, and professionalism, we set
          new industry standards. Backed by a large, well-trained staff, we
          ensure consistent, high-quality service delivery.
        </p>
        <p className="mb-4">
          Recognizing the importance of a clean work environment, we offer a
          comprehensive range of services tailored to meet diverse needs
          effectively and efficiently
        </p>
        <h4 className="text-xl font-bold text-red-600">
          In AUCS, we clean for a living because cleaning is what we do best!
        </h4>
      </div>
    </div>
  );
}

export default AboutCleaning
