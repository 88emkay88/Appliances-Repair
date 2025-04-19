import React from "react";
import { useMask } from "@react-input/mask";

const Contact = () => {
  const inputRef = useMask({
    mask: "+27 (99) 999-9999",
    replacement: { 9: /\d/ },
  });

  return (
    <section className="grid grid-cols-2 p-25 text-gray-200" id="contact">
      <h2 className="col-span-2 text-center mb-10 text-4xl font-bold">
        Contact Us
      </h2>

      <div>
        <h2 className="text-5xl font-medium">Is there a breakdown?</h2>
        <h3 className="text-4xl font-bold bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
          need help?
        </h3>
        <p className="w-1/2">
          Fill out the form and we will contact you within{" "}
          <strong className="bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent">
            15 minutes
          </strong>{" "}
          to solve your problem.
        </p>
      </div>

      <form className="space-y-4 flex flex-col bg-gray-600 p-20 rounded-4xl shadow-2xl">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-200"
        >
          * Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="w-full rounded-full px-4 py-2 placeholder-gray-400 text-gray-800 bg-red-50"
        />

        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-200"
        >
          * Your Phone
        </label>
        <div className="flex items-center text-gray-700 bg-red-50 rounded-full px-4 py-2">
          <span className="mr-2">🇿🇦</span>
          <input
            ref={inputRef}
            name="phone"
            id="phone"
            placeholder="(__) ___-____"
            className="bg-transparent outline-none w-full placeholder-gray-400"
          />
        </div>

        <button className="bg-gradient-to-tr from-blue-800 to-blue-400 hover:from-blue-500 hover:to-blue-300 py-3 px-8 rounded-full font-bold text-blue-100">
          Call Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
