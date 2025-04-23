import {useNavigate} from "react-router-dom";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

const CompanyCreate = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-3xl m-auto my-10 border rounded-2xl gap-5 px-5 flex flex-col  py-5">
        <h2 className="text-lg font-mono">
          {" "}
          Enter Company Name for Registration{" "}
        </h2>
        <Input
          type="text"
          className="border"
          placeholder="Enter Your Company Name"
        />
        <div className="flex gap-5">
          <Button
            onClick={() => navigate("/admin/companies")}
            className="bg-red-600 hover:bg-red-700"
          >
            Cancel
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">Continue</Button>
        </div>
      </div>
    </>
  );
};

export default CompanyCreate;
