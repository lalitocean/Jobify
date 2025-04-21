import {useSelector} from "react-redux";
import LatestJobCards from "./LatestJobCards";

const LatestJobes = () => {
  const {allJobs} = useSelector((store) => store.jobs);
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-auto mb-10">
        <dir className="py-10">
          <h2 className="font-bold lg:text-2xl md:text-2xl sm:text-2xl bg-red-700 text-white py-1 px-4 rounded-md  text-center">
            #Latest Job Openings
          </h2>
        </dir>
        <div className="grid  gap-6 lg:grid-cols-3 md:grid-cols-2 ">
          {allJobs.map((job) => (
            <div key={job?._id}>
              <LatestJobCards job={job} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobes;
