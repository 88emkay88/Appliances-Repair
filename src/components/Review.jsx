import React from "react";

const Review = () => {
  return (
    <>
      <section className="bg-gray-200 mt-10 p-30" id="review">    
        {/* Reviews */}
        <div className="flex gap-10 px-5 items-center justify-evenly">
          {/* title */}
          <div className="space-y-4 w-1/2 text-gray-900">
            <h2 className="text-7xl flex flex-col">
              <span className="font-bold bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
                reviews
              </span>{" "}
              <span>about our work</span>
            </h2>
            <p className="w-3/6 ">
              <strong className="font-bold">We are proud</strong> to say that
              most our clients recommend us to their friends
            </p>
          </div>

          {/* reviews */}
          <div className="flex flex-col space-y-10 text-gray-900">
            <div className="grid grid-cols-2">
              <p className="border-r-2 border-gray-900 ">
                <strong>375</strong> reviews
              </p>

              <p className="ml-20">
                <strong>9 of 10</strong> rating
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-15">
                <p className="font-bold">Average Rating</p>
                <div className=" bg-gray-300  p-0.5 rounded w-50 h-2">
                  <div className="bg-teal-500 rounded w-46 h-full"></div>
                </div>
              </div>

              <div className="flex items-center space-x-23">
                <p className="font-bold">Reputation</p>
                <div className=" bg-gray-300  p-0.5 rounded w-50 h-2">
                  <div className="bg-teal-500 rounded w-39 h-full"></div>
                </div>
              </div>

              <div className="flex items-center space-x-29">
                <p className="font-bold">Recency</p>
                <div className=" bg-gray-300  p-0.5 rounded w-50 h-2">
                  <div className="bg-teal-500 rounded w-49 h-full"></div>
                </div>
              </div>

              <div className="flex items-center space-x-15">
                <p className="font-bold">Responsiveness</p>
                <div className=" bg-gray-300  p-0.5 rounded w-50 h-2">
                  <div className="bg-teal-500 rounded w-47 h-full"></div>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-tr from-blue-800 to-blue-400 hover:from-blue-500 hover:to-blue-300 py-3 px-8 rounded-full font-bold text-blue-100">
              Read all reviews
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
