import {Input} from "../ui/input";
import {Button} from "../ui/button";
import RecruiterJobTable from "../RecruiterJobTable";

const RecruiterJobs = () => {
  return (
    <>
      {/* Register copanies */}

      <div className="max-w-5xl m-auto my-22 border rounded-2xl gap-5 px-5 flex flex-col py-5">
        <div className="flex justify-between gap-5">
          <Input type="text" className="border w-52" placeholder="Search..." />
          <Button className="bg-red-600 hover:bg-red-700">Add Job</Button>
        </div>

        {/* Job table */}
        <div>
          <RecruiterJobTable />
        </div>
      </div>
    </>
  );
};

export default RecruiterJobs;
