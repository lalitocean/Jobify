import {Label} from "@radix-ui/react-label";
import React from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {useNavigate} from "react-router-dom";

const JobPost = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-3xl m-auto my-10 border rounded-2xl gap-2 px-5 flex flex-col  py-5">
        <Input
          type="text"
          name="companyName"
          className="border"
          placeholder="Job Name"
        />
        <div className="flex gap-5 mt-2">
          <Button
            onClick={() => navigate("/recruiter/jobs")}
            className="bg-red-600 hover:bg-red-700"
          >
            Back
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">Create</Button>
        </div>
      </div>
    </>
  );
};

export default JobPost;
