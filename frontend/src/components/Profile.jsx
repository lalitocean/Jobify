import {Contact, Mail, Pen} from "lucide-react";
import {Avatar, AvatarImage} from "./ui/avatar";
import {Button} from "./ui/button";
import {Badge} from "./ui/badge";
import {Label} from "@radix-ui/react-label";
import AppliedJobTable from "./appliedJobTable";

const skills = ["JavaScript", "React", "Node.js"];

const profile = () => {
  const isResume = true; // Replace with actual condition to check if resume is available
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-auto mb-10 mt-10 bg-white border-2 border-gray-100 rounded-2xl shadow-1xl p-5">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <Avatar className="w-24 h-24 border-2 border-gray-200 rounded-2xl shadow-sm">
            <AvatarImage
              src="https://example.com/profile.jpg"
              alt="Profile Picture"
            />
          </Avatar>
          <div>
            <div className="flex justify-center gap-5 items-center w-full mt-4">
              <h2 className="text-2xl font-bold text-center py-3">John Doe</h2>
              <div>
                <Button
                  variant="outline"
                  className="bg-red-600  text-white rounded-md shadow-sm hover:bg-red-700 hover:text-white transition duration-200"
                >
                  <Pen />
                </Button>
              </div>
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, ex.
            </p>
          </div>
          {/* contact info */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-center gap-2 items-center w-full mt-4 ">
              <Mail />
              <span>example@gmail.com</span>
            </div>
            <div className="flex justify-center gap-2 items-center w-full mt-3 mb-5 ">
              <Contact />
              <span>1234567890</span>
            </div>
            <div>
              <span>Skills : </span>
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <Badge className="text-red-700" variant="outline" key={index}>
                    {skill}
                  </Badge>
                ))
              ) : (
                <span className="text-gray-500">NA</span>
              )}
              <div className="flex justify-center gap-2 items-center w-full mt-3 mb-5 ">
                <Label>Resume : </Label>
                {isResume ? (
                  <a
                    className="text-red-700 underline font-semibold"
                    target="_blank"
                    href="/path/to/resume.pdf"
                  >
                    jhon Doe Resume
                  </a>
                ) : (
                  <span className="text-gray-500">No resume uploaded</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applied Job application */}
      <div className="mt-10  h-auto border-2 border-gray-100 rounded-2xl shadow-1xl p-5">
        <h2 className="font-bold lg:text-2xl md:text-2xl sm:text-2xl bg-red-700 text-white py-1 px-4 rounded-md  text-center mb-5">
          #Applied Jobs
        </h2>
        <div className="border-2 border-gray-100 rounded-2xl shadow-1xl ">
          <AppliedJobTable />
        </div>
      </div>
    </div>
  );
};

export default profile;
