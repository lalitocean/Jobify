import React from "react";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";

const JobDeatils = () => {
  const isApplied = false;
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 h-auto mb-10 mt-10 bg-white border-2 border-gray-100 rounded-2xl shadow-1xl p-5 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold">
            Need Good Mern Stack Developer
          </h1>
          <div className="my-1 flex gap-2 text-red-700">
            <Badge variant="ghost">Full Time</Badge>
            <Badge variant="ghost">india</Badge>
            <Badge variant="ghost">12 position</Badge>
          </div>

          <Button className="bg-red-700 hover:bg-red-800 hover:text-white">
            {isApplied ? "Already Apply" : "Apply Now"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobDeatils;
