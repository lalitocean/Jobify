import React from "react";
import {Badge} from "./ui/badge";

const LatestJobCards = ({index, job}) => {
  return (
    <div key={index}>
      <div className=" bg-white border-2 border-gray-100 rounded-2xl shadow-1xl  cursor-pointer p-5">
        <div>
          {job}
          <h2 className="font-medium text-lg">Company Name </h2>
          <p className="text-sm text-gray-500">Loation</p>
        </div>
        <div className="pt-2 pb-2">
          <h1 className="text-lg font-bold">JOb title</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            incidunt eos placeat ratione quam asperiores tempora enim
          </p>
        </div>
        <div className="my-1 flex gap-3 text-red-700">
          <Badge variant="ghost">Full Time</Badge>
          <Badge variant="ghost">india</Badge>
          <Badge variant="ghost">12 position</Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
