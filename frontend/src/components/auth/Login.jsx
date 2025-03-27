import {Input} from "../ui/input";
import {RadioGroup} from "../ui/radio-group";
import {Label} from "../ui/label";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className=" pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl">
          <form className="bg-white px-10 py-5">
            {/* Email */}
            <div className="mb-5">
              <Label className="block text-gray-700 mb-2">Your Email</Label>
              <Input type="text" className="w-full" placeholder="Email" />
            </div>

            <div className="mb-5">
              <Label className="block text-gray-700 mb-2" htmlFor="Last Name">
                Password
              </Label>
              <Input
                type="password"
                className="w-full "
                placeholder="Password"
              />
            </div>
            <div className="mb-5">
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
                  <Label htmlFor="r1" className="text-gray-700">
                    Student
                  </Label>
                </div>
                <div className="flex gap-2 border-1 px-5 rounded-3xl shadow-2xs">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2" className="text-gray-700">
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-3 items-center gap-2">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Login
              </button>
            </div>
            <span className="text-gray-700 text-sm font-mono">
              {" "}
              Don't have an account? {""}
              <Link
                to="/register"
                className="text-red-700 font-medium underline "
              >
                Create Account
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
