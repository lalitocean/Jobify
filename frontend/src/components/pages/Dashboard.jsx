import React from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";

import CompaniesTable from "../CompaniesTable";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Register copanies */}

      <div className="max-w-5xl m-auto my-5 border rounded-2xl gap-5 px-5 flex flex-col  py-5">
        <div className="flex justify-between gap-5">
          <Input
            type="text"
            className="border w-52"
            placeholder="filter, Serach by Name"
          />
          <Button
            onClick={() => navigate("/recruiter/company/create")}
            className="bg-red-600 hover:bg-red-700"
          >
            Add New Company
          </Button>
        </div>

        {/* Companies table */}
        <div>
          <CompaniesTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
