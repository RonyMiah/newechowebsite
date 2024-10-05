import React from 'react'
import WhatWeDoCart from './WhatWeDoCart';

const WhatWeDo = () => {
  return (
    <div className="container md:px-28  lg:px-28 sm:p-0 sm:mt-16 sx:mt-16 sx:p-0">
      <div>
        <h1 className="text-4xl font-bold text-[#33297C] "> What We Do</h1>

        <p className="my-4 text-2xl">
          At AUCS, we specialize in providing comprehensive{" "}
          <span className="text-[#33297C] font-bold">
            cleaning services on a contractual basis for all types of buildings
          </span>
          . From residential complexes to commercial spaces, we tailor our
          services to meet the unique needs of each client. Our team of skilled
          professionals is dedicated to delivering{" "}
          <span className="text-[#33297C] font-bold">
            exceptional cleanliness and hygiene standards
          </span>
          , ensuring that your environment is not only pristine but also
          conducive to a{" "}
          <span className="text-[#33297C] font-bold">
            healthy and welcoming atmosphere.
          </span>{" "}
          Whether you require regular maintenance or specialized cleaning
          solutions, we are committed to exceeding your expectations and
          creating a space you can be proud of.
        </p>
      </div>
      <WhatWeDoCart/>
    </div>
  );
}

export default WhatWeDo
