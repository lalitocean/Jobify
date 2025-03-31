import React from "react";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import {Search} from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-white lg:grid lg:h-[60vh] lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Search & Apply
              <strong className="text-red-700"> #Get Your Dreame Job! </strong>
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Discover the best job opportunities. Join us and take the first
              step towards your dream career.
            </p>
            <div className="mt-4 flex justify-center sm:mt-6">
              <Input
                type="text"
                id="search"
                name="search"
                placeholder="Search jobs..."
                className="w-full max-w-xs outline-none border-none bg-transparent shadow-sm font-semibold"
              />
              <Button className="rounded-r-full bg-red-700 text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300">
                <Search size={20} className=" text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
