import LatestJobCards from "./LatestJobCards";

const LatestJobOpenings = [1, 2, 3, 4, 5, 6];

const LatestJobes = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-auto mb-10">
        <dir className="py-10">
          <h2 className="font-bold lg:text-2xl md:text-2xl sm:text-2xl bg-red-700 text-white py-1 px-4 rounded-md  text-center">
            #Latest Job Openings
          </h2>
        </dir>
        <div className="grid  gap-6 lg:grid-cols-3 md:grid-cols-2 ">
          {LatestJobOpenings.map((job, i) => (
            <LatestJobCards job={job} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobes;
