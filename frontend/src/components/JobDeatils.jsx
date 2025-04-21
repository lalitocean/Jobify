import {useEffect} from "react";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {useParams} from "react-router-dom";
import axios from "axios";
import {JOB_API_END_POINT} from "@/utils/constant";
import {useDispatch, useSelector} from "react-redux";
import {setSingalJob} from "@/redux/jobSlice";

const JobDeatils = () => {
  const {singalJob} = useSelector((store) => store.jobs);
  const {user} = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const isApplied = false;
  const params = useParams();
  const jobId = params.id;

  useEffect(() => {
    const getSingalJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingalJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSingalJob();
  }, [jobId, dispatch, user?._id]);

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

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We’re looking for a skilled frontend developer to join our team.
                You’ll be responsible for creating beautiful, responsive user
                interfaces using React, Tailwind CSS, and modern frontend tools.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Requirements
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>2+ years of experience with React</li>
                <li>Strong knowledge of JavaScript, HTML, and CSS</li>
                <li>
                  Experience with Tailwind CSS or other utility-first frameworks
                </li>
                <li>Familiarity with RESTful APIs</li>
                <li>Excellent problem-solving skills</li>
              </ul>
            </div>
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
