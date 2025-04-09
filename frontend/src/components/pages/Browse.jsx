import JobCard from "../JobCard";

const jobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  return (
    <div className="m-auto max-w-screen-xl px-5 py-5">
      <div className="py-5 text-center">
        <h1 className="text-lg font-semibold">
          Search results : {jobs.length}
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {jobs.map((job, index) => (
          <div key={index} className="">
            {job}
            <JobCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
