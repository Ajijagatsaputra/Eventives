"use client";

import React from "react";

export default function EventDetails() {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-gray-300 py-10">
      <div className="flex justify-center items-center md:w-1/2 bg-gray-300 md:bg-transparent">
        <img
          src="/assets/events/image3.png"
          alt="Event Illustration"
          className="rounded-xl shadow-lg max-w-[90%] max-md:w-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-lg font-bold md:w-1/2 px-5">
        <div className="flex flex-col justify-center items-center text-center h-full">
          <h1 className="mt-9 text-3xl md:text-4xl text-black">
            Make your own Event
          </h1>
          <p className="mt-4 text-neutral-800 text-base md:text-lg max-w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula risus eget orci elementum, a facilisis justo hendrerit.
          </p>
          <button
            className="px-16 py-5 mt-5 text-center text-white bg-pink-600 rounded-[50px] shadow-[0px_10px_50px_rgba(61,55,241,0.25)] w-[302px] hover:bg-pink-700 transition-all duration-300"
            onClick={() => {}}
          >
            Create Events
          </button>
        </div>
      </div>
    </div>
  );
}
