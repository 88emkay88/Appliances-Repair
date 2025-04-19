import { Phone } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative">
        {/* Background Image */}
        <div className=" inset-0 -z-10">
          <img
            className="w-full"
            src="/images/background-kitchen.jpg"
            alt="clean kitchen"
          />
        </div>

        {/* Content */}
        <div className="absolute top-30 left-20 flex flex-col items-start">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-8xl xl:text-9xl font-bold bg-gradient-to-tr from-gray-600 to-blue-800 bg-clip-text text-transparent">
                Home Appliance Repair
              </h1>
            </div>

            <div className="ml-20">
              <img src="/images/appliances.png" alt="" />
            </div>
          </div>

          <button className="flex bg-gradient-to-tr from-blue-800 to-blue-400 hover:from-blue-500 hover:to-blue-300 py-4 px-16 rounded-full font-bold text-blue-100 tracking-wide transform">
            <Phone className="mr-2"/>Contact
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
