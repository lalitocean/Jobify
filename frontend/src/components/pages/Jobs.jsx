import {useSelector} from "react-redux";
import JobCard from "../JobCard";
import JobFillter from "../JobFillter";

const Jobs = () => {
  const {allJobs} = useSelector((store) => store.jobs);

  return (
    <>
      <div className="m-auto max-w-screen-xl my-5">
        <div className="flex justify-center gap-5 px-5">
          {/* Job fillter */}
          <div className="">
            <JobFillter />
          </div>

          {/* Job Cards */}
          <div className="w-fit">
            {allJobs.length <= 0 ? (
              <span className="flex justify-center items-center h-full">
                <span className="text-2xl font-mono">Job Not Found!</span>
              </span>
            ) : (
              <ul className="grid grid-cols-3 gap-5 overflow-y-auto h-[90vh] ">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <JobCard job={job} />
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
