import {Badge} from "./ui/badge";

const LatestJobCards = ({job, key}) => {
  return (
    <div
      key={key}
      className=" bg-white border-2 border-gray-100 rounded-2xl shadow-1xl cursor-pointer p-5"
    >
      <div>
        <h2 className="font-medium text-lg">{job?.company?.name}</h2>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div className="pt-2 pb-2">
        <h1 className="text-lg font-bold">{job?.title}</h1>
        <p className="text-sm">{job?.description}</p>
      </div>
      <div className="my-1 flex gap-3 text-red-700">
        <Badge variant="ghost">{job?.position}</Badge>
        <Badge variant="ghost">{job?.jobType}</Badge>
        <Badge variant="ghost">{job?.salary}</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
