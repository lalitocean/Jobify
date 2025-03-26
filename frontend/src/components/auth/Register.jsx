import React from "react";
import {Input} from "../ui/input";
import {RadioGroup} from "../ui/radio-group";
import {Label} from "../ui/label";

const Register = () => {
  return (
    <>
      <section className=" pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl">
          <form className="bg-white px-10 py-5 ">
            {/* full Name */}
            <div className="mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="Last Name">
                  Full Name
                </label>
                <Input
                  type="text"
                  className="w-full "
                  placeholder="Full Name"
                />
              </div>
            </div>
            {/* Email */}
            <div className="mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>
                <Input type="text" className="w-full" placeholder="Email" />
              </div>
            </div>
            {/* phone nUmber */}
            <div className="mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="Last Name">
                  Phone Number
                </label>
                <Input
                  type="email"
                  className="w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="mb-5">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="Last Name">
                  Password
                </label>
                <Input
                  type="password"
                  className="w-full "
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mb-6">
              <Label className="block text-gray-700 mb-3">
                Select Your Role
              </Label>
              <RadioGroup className="flex">
                <div className="flex gap-2 border-1 px-5 rounded-3xl shadow-2xs">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex gap-2 border-1 px-5 rounded-3xl shadow-2xs">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
