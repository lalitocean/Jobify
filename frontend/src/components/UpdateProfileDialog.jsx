import React, {useState} from "react";
import {Dialog, DialogContent, DialogHeader} from "./ui/dialog";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {USER_API_END_POINT} from "@/utils/constant";
import {toast} from "sonner";

const UpdateProfileDialog = ({open, setOpen}) => {
  const {user} = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const fileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({...input, file});
  };

  const dispatch = useDispatch();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form/data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setInput(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }

    setOpen(false);
  };

  return (
    <>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>Update Profile</DialogHeader>
          <form onSubmit={formSubmitHandler}>
            <div>
              {/* FullName */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="fullName" className="">
                  Full Name
                </Label>
                <Input
                  className=""
                  value={input.fullName}
                  onChange={changeEventHandler}
                  type="text"
                  name="fullName"
                />
              </div>
              {/* Email */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="email" className="">
                  Email
                </Label>
                <Input
                  className=""
                  value={input.email}
                  onChange={changeEventHandler}
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              {/* PhoneNumber */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="phoneNumber" className="">
                  Phone Number
                </Label>
                <Input
                  className=""
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  type="text"
                  name="phoneNumber"
                />
              </div>
              {/* Bio */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="bio" className="">
                  Bio
                </Label>
                <Input
                  className=""
                  value={input.bio}
                  onChange={changeEventHandler}
                  type="text"
                  name="bio"
                />
              </div>
              {/* Skills */}
              <div className="grid gap-3 mb-3">
                <Label htmlFor="skills" className="">
                  Skills
                </Label>
                <Input
                  className=""
                  value={input.skills}
                  onChange={changeEventHandler}
                  type="text"
                  name="skills"
                />
              </div>
              {/* Resume */}
              <div className="grid gap-3 mb-5">
                <Label htmlFor="resume" className="">
                  Resume
                </Label>
                <Input
                  className=""
                  type="file"
                  onChange={fileHandler}
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
