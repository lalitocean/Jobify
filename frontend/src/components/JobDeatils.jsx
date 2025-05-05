import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setSingalJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDeatils = () => {
  const { singalJob } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const isInitalApplied = singalJob?.applications?.some(
    (application) => application.applicant === user?._id || false
  );
  const [isApplied, setIsApplied] = useState(isInitalApplied);
  const params = useParams();
  const jobId = params.id;

  useEffect(() => {
    const getSingalJob = async () => {
      try {
        const res = await axios.get(`job/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingalJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSingalJob();
  }, [jobId, dispatch, user?._id]);

  // this wroks when user click
  const jObApplyHandler = async () => {
    try {
      const res = await axios.get(`application/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setIsApplied(true);
        const updatedSingalJob = {
          ...singalJob,
          applications: [...singalJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingalJob(updatedSingalJob));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 h-auto mb-10 mt-10 bg-white border-2 border-gray-100 rounded-2xl shadow-1xl p-5 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold mb-5">{singalJob?.title}</h1>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 mb-6">
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-medium">Job Type</p>
                <p className="text-gray-600">Full-time</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-medium">Salary</p>
                <p className="text-gray-600">$80k – $100k</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-medium">Position</p>
                <p className="text-gray-600">{singalJob?.position}</p>
              </div>
            </div>

            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quas velit accusamus dolore! In qui excepturi laboriosam cum
                nisi, esse voluptate, laudantium pariatur reiciendis quibusdam
                corrupti impedit dicta doloribus amet!
              </p>
            </div>
            <div className="mb-6">
              <dir className="border-2 mb-3"></dir>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>
                  <span className="font-bold">Role : </span> {singalJob?.title}
                </li>
                <li>
                  <span className="font-bold"> Location :</span>{" "}
                  {singalJob?.location}
                </li>
                <li>
                  <span className="font-bold"> Experience :</span>{" "}
                  {singalJob?.experience}
                </li>
                <li>
                  <span className="font-bold"> Total Applicants : </span>
                  {singalJob?.applications?.length}
                </li>
                <li>
                  <span className="font-bold">Posted Date :</span>{" "}
                  {singalJob?.createdAt.split("T")[0]}
                </li>
              </ul>
            </div>
          </div>

          <Button
            onClick={isApplied ? null : jObApplyHandler}
            // disabled={false}
            className={`${isApplied ? "bg-red-400 cursor-not-allowed" : "bg-red-700"
              }  hover:bg-red-800 hover:text-white`}
          >
            {isApplied ? "Already Apply" : "Apply Now"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobDeatils;
