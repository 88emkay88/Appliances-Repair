import React from 'react'

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mt-20 mb-5 text-5xl text-white font-bold">
          <span className="bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
            Services
          </span>{" "}
          we offer
        </h2>

        <div className="grid grid-cols-2 gap-5 p-10 w-4/6">
          <div className="flex space-x-10 relative bg-[#292929] rounded-2xl p-10 shadow-2xl ">
            <div id="appliance" className=''>
              <h3 className='text-2xl text-white font-bold mb-3'>Appliance</h3>
              <p className='text-gray-300 w-50 text-sm'>Fridge, Washer and Dryer, Stove Oven and Dishwasher</p>
            </div>

            <div>
              <img
                className="w-2/4 absolute -top-13 right-0"
                src="/src/assets/images/Fridge.png"
                alt=" A fridge"
              />
            </div>
          </div>

          <div className="flex space-x-10 relative bg-[#292929] rounded-2xl p-10 shadow-2xl  ">
            <div id="plumbing">
              <h3 className="text-2xl text-white font-bold mb-3">Plumbing</h3>
              <p className="text-gray-300 w-50 text-sm">Leak Repairs, Clogging Issues, Sewer Backups</p>
            </div>

            <div>
              <img
                className="w-2/4 absolute -top-13 right-0"
                src="/src/assets/images/Tap.png"
                alt="A Tap"
              />
            </div>
          </div>

          <div className="flex space-x-10 relative bg-[#292929] rounded-2xl p-10 shadow-2xl  ">
            <div id="electronics">
              <h3 className="text-2xl text-white font-bold mb-3">Electronics</h3>
              <p className="text-gray-300 w-50 text-sm">Electronic Repairs, New Electronics Services</p>
            </div>

            <div>
              <img
                className="w-2/4 absolute -top-13 right-0"
                src="/src/assets/images/Microwave.png"
                alt=" A microwave"
              />
            </div>
          </div>

          <div className="flex space-x-10 relative bg-[#292929] rounded-2xl p-10 shadow-2xl   ">
            <div id="ac-furnace">
              <h3 className="text-2xl text-white font-bold mb-3">AC & Furnace</h3>
              <p className="text-gray-300 w-50 text-sm">AC & Furnace Repairs, HVAC, Maintainance Plans, Upgrades</p>
            </div>

            <div>
              <img
                className="w-2/4 absolute -top-13 right-0"
                src="/src/assets/images/Air-Con.png"
                alt="An Air conditioner "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services