import JobCard from "../JobCard";

const jobesArray = [1, 2, 3, 4, 5, 6];

const Jobs = () => {
  return (
    <>
      <div className=" m-auto max-w-screen-xl my-5 ">
        <div className="flex justify-center">
          {/* Job fillter */}
          <div className="flex h-fit p-5">
            <div className="w-[10vw]  text-center ">
              <p>Fullstack</p>
              <p>Fullstack</p>
              <p>Fullstack</p>
              <p>Fullstack</p>
              <p>Fullstack</p>
              <p>Fullstack</p>
              <p>Fullstack</p>
            </div>
          </div>
          {/* Job Cards */}
          <div className="w-[90vw] p-5">
            {jobesArray.length <= 0 ? (
              <span className="flex justify-center items-center h-full">
                <span className="text-2xl font-mono">Job Not Found:)</span>
              </span>
            ) : (
              <ul className="grid grid-cols-3 gap-5 overflow-y-auto h-[70vh] ">
                {jobesArray.map((job, index) => (
                  <JobCard job={job} index={index} />
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
