import React from "react";
import {Dialog, DialogContent, DialogHeader} from "./ui/dialog";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {Button} from "./ui/button";

const UpdateProfileDialog = ({open, setOpen}) => {
  return (
    <>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>Update Profile</DialogHeader>
          <form action="">
            <div>
              {/* FullName */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="fullname" className="">
                  Full Name
                </Label>
                <Input className="" type="text" name="fullname" id="fullName" />
              </div>
              {/* Email */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input className="" type="text" name="email" id="email" />
              </div>
              {/* PhoneNumber */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="phonenumber" className="">
                  Phone Number
                </Label>
                <Input
                  className=""
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                />
              </div>
              {/* Bio */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="bio" className="">
                  Bio
                </Label>
                <Input className="" type="text" name="bio" id="bio" />
              </div>
              {/* Skills */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="skills" className="">
                  Skills
                </Label>
                <Input className="" type="text" name="skills" id="skills" />
              </div>
              {/* Resume */}
              <div className="grid gap-3 mb-5">
                <Label htmlFor="resume" className="">
                  Resume
                </Label>
                <Input
                  className=""
                  type="file"
                  name="resume"
                  id="resume"
                  accept="application/pdf"
                />
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 w-full">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfileDialog;
