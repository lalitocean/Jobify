import LatestJobCards from "./LatestJobCards";

const LatestJobOpenings = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobes = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:gap-8 h-auto mb-10">
        <dir className="py-10">
          <h2 className="font-bold text-3xl lg:text-3xl md:text-2xl sm:text-2xl ">
            <strong>
              <span className="text-red-700 t">#Latest</span>
            </strong>{" "}
            Job Openings
          </h2>
        </dir>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
          {LatestJobOpenings.map((job, index) => (
            <LatestJobCards job={job} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestJobes;
