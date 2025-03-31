import {Bookmark} from "lucide-react";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {Avatar, AvatarImage} from "./ui/avatar";

const JobCard = ({index}) => {
  return (
    <div
      key={index}
      className=" bg-white border-2 border-gray-100 rounded-2xl shadow-1xl  cursor-pointer p-3"
    >
      <div className="flex justify-between items-center">
        <Badge variant="outline">2 day ago</Badge>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="">
        <div className="mt-5 flex items-center gap-5 ">
          <Button variant="outline" size="icon" className="w-16 h-16 my-2">
            <Avatar>
              <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"></AvatarImage>
            </Avatar>
          </Button>
          <div>
            <h2 className="font-medium text-lg">Company Name</h2>
            <p className="text-sm text-gray-500">Loation</p>
          </div>
        </div>
        <div className="pt-2 pb-2">
          <h1 className="text-lg font-bold">JOb title</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            incidunt eos placeat ratione quam asperiores tempora enim
          </p>
        </div>
        <div className="my-1 flex gap-3 text-red-700">
          <Badge variant="ghost">Full Time</Badge>
          <Badge variant="ghost">india</Badge>
          <Badge variant="ghost">12 position</Badge>
        </div>
        <div className="flex  gap-5 itmes-center mt-3">
          <Button className="shadow-2xs bg-red-600 hover:bg-red-700 font-semibold">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
