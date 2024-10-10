import React from 'react'

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Card 1 */}
        <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64 hover:bg-red-600">
          <span className="text-red-500 font-semibold hover:text-white">
            01
          </span>
          <h3 className="text-3xl font-bold mt-2">Interior Maintenance</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
          <span className="text-red-500 font-semibold hover:text-white">
            02
          </span>
          <h3 className="text-3xl font-bold mt-2">Exterior Maintenance</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
          <span className="text-red-500 font-semibold hover:text-white">
            03
          </span>
          <h3 className="text-3xl font-bold mt-2">Special Services</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-indigo-900 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64  hover:bg-red-600">
          <span className="text-red-500 font-semibold hover:text-white">
            04
          </span>
          <h3 className="text-3xl font-bold mt-2">Initial Cleaning Services</h3>
        </div>

        {/* Card 5 */}
        <div className="bg-red-600 text-white rounded-2xl p-6 w-full sm:w-48 md:w-60 lg:w-64 hover:bg-indigo-900 hover:text-white ">
          <span className="text-indigo-900 font-semibold hover:text-white">
            Emergency
          </span>
          <h3 className="text-3xl font-bold mt-2">Mobile Team Standby 24/7</h3>
        </div>
      </div>
    </>
  );
}

export default ServiceCard
