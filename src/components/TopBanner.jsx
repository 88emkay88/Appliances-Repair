import { Phone } from "lucide-react";
import React from "react";

const TopBanner = () => {
  return (
    <div className="hidden xl:flex lg:px-30 py-5 text-gray-300 border-b-2  justify-between bg-[#1F1F1F] ">
      {/* Hours */}
      <div className="md:flex lg:block">
        <p>Mon. - Fri. 9am - 7pm</p>
        <p>Sat. - Sun. 9:30am - 6:30pm</p>
      </div>

      <div className="flex space-x-10">
        <select className="outline-none font-bold" name="cities" id="cities">
          <option className="hidden">Cities we serve</option>
          <option className="text-black">Benoni</option>
          <option className="text-black">Kempton Park</option>
          <option className="text-black">Boksburg</option>
        </select>

        <div className="flex items-center space-x-0.5">
          <Phone />
          <p>Text For Service</p>
          <p className="font-bold ml-2 text-white">(071) 234 5678</p>
        </div>

        <div className="flex items-center space-x-0.5">
          <Phone />
          <p>call us</p>
          <p className="font-bold ml-2 text-white">(071) 234 5678</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
