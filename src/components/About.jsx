import { ArrowUpRight } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="bg-gray-200 p-10">
        <div className="grid grid-cols-2 space-x-2 mt-20">
          <div className="space-y-5 xl:w-1/2">
            <h2 className="text-6xl lg:text-8xl flex flex-col">
              <span>who</span>{" "}
              <span className="font-bold bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
                we are
              </span>
            </h2>
            <p className="text-sm tracking-wider">
              At Appliance Repair, we specialize in the repair, maintenance, and
              installation of all major home appliances. From refrigerators and
              washing machines to ovens and air conditioners, our certified
              technicians bring years of experience and a commitment to
              excellence to every job.
            </p>
            <p className="text-sm tracking-wider">
              We pride ourselves on reliable service, transparent pricing, and
              customer satisfaction. Whether it's a quick fix or a full
              appliance overhaul, you can count on us to keep your household
              running smoothly.
            </p>
            <p className="text-sm tracking-wider">
              Locally owned and operated, Appliance Repair is your trusted
              partner for fast, friendly, and professional appliance care.
            </p>

            <a
              className="flex items-center w-1/2 bg-gradient-to-tr from-blue-800 to-blue-400 hover:from-blue-500 hover:to-blue-300 py-3 px-8 rounded-full font-bold text-blue-100"
              href="#about"
            >
              Learn more <ArrowUpRight />
            </a>
          </div>
          <div>
            <img
              src="/src/assets/images/maintanance-guy.jpg"
              alt="maintanance guy"
              className="xl:w-4/5 h-130 rounded-4xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
