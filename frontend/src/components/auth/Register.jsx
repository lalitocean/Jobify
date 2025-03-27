import {Input} from "../ui/input";
import {RadioGroup} from "../ui/radio-group";
import {Label} from "../ui/label";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {USER_API} from "@/utils/constant";
import {toast} from "sonner";

const Register = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    Profilephoto: "",
  });

  const navigate = useNavigate();

  // Handle input change

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  // handle file change

  const handleFileChange = (e) => {
    setInput({...input, photo: e.target.files?.[0]});
  };

  // Handle form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.photo) formData.append("photo", input.photo);

    try {
      const res = await axios.post(`${USER_API}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className=" pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl">
          <form className="bg-white px-10 py-5" onSubmit={handleSubmit}>
            {/* full Name */}
            <div className="mb-5">
              <Label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </Label>
              <Input
                name="fullName"
                value={input.fullName}
                onChange={handleChange}
                type="text"
                className="w-full "
                placeholder="Full Name"
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <Label htmlFor="email" className="block text-gray-700 mb-2">
                Your Email
              </Label>
              <Input
                name="email"
                value={input.email}
                onChange={handleChange}
                type="text"
                className="w-full"
                placeholder="Email"
              />
            </div>
            {/* phone nUmber */}
            <div className="mb-5">
              <Label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                Phone Number
              </Label>
              <Input
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleChange}
                type="text"
                className="w-full"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-5">
              <Label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </Label>
              <Input
                name="password"
                value={input.password}
                onChange={handleChange}
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
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={handleChange}
                    type="radio"
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
                    checked={input.role === "recruiter"}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2" className="text-gray-700">
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-5">
              <Label className="block text-gray-700 mb-3">Profile Photo</Label>
              <Input
                type="file"
                name="Profilephoto"
                value={input.Profilephoto}
                onChange={handleFileChange}
                className="w-full"
                accept="image/*"
              />
            </div>
            <div className="mb-3 items-center gap-2">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Create Account
              </button>
            </div>
            <span className="text-gray-700 text-sm font-mono">
              {" "}
              Already have an account?{" "}
              <Link to="/login" className="text-red-700 underline ">
                Login
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
