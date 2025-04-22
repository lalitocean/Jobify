import {Bookmark} from "lucide-react";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {Avatar, AvatarImage} from "./ui/avatar";
import {useNavigate} from "react-router-dom";

const JobCard = ({job}) => {
  const navigate = useNavigate();

  const timeCalFun = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timecalculate = currentTime - createdAt;
    return Math.floor(timecalculate / (1000 * 24 * 60 * 60));
  };

  return (
    <div className=" bg-white border-2 border-gray-100 rounded-2xl shadow-1xl  cursor-pointer p-3">
      <div className="flex justify-between items-center">
        <Badge variant="outline">
          {timeCalFun(job?.createdAt) == 0
            ? "Today"
            : ` ${timeCalFun(job?.createdAt)}, days ago`}
        </Badge>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="">
        <div className="mt-5 flex items-center gap-5 ">
          <Button variant="outline" size="icon" className="w-16 h-16 my-2">
            <Avatar>
              <AvatarImage src=""></AvatarImage>
            </Avatar>
          </Button>
          <div>
            <h2 className="font-medium text-lg">{job?.company?.name}</h2>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
        <div className="pt-2 pb-2">
          <h1 className="text-lg font-bold">{job?.title}</h1>
          <p className="text-sm">{job?.description}</p>
        </div>
        <div className="my-1 flex gap-3 text-red-700">
          <Badge variant="ghost">{job?.jobType}</Badge>
          <Badge variant="ghost">{job?.salary}</Badge>
          <Badge variant="ghost">{job?.position}</Badge>
        </div>
        <div className="flex  gap-5 itmes-center mt-3">
          <Button
            onClick={() => navigate(`/deatils/${job?._id}`)}
            className="shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
