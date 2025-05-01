import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
import {MoreHorizontal} from "lucide-react";
import {useSelector} from "react-redux";

const ApplicantsTable = () => {
  const status = ["accpted", "Rejected"];

  const {applications} = useSelector((store) => store.applications);
  return (
    <>
      <div className="border rounded-2xl overflow-hidden p-1 bg-gray-50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications &&
              applications?.applications?.map((application) => {
                return (
                  <tr key={application._id}>
                    <TableCell>{application?.applicant?.fullName}</TableCell>
                    <TableCell>{application?.applicant?.email}</TableCell>
                    <TableCell>{application?.applicant?.phoneNumber}</TableCell>
                    <TableCell>
                      {application?.applicant?.profile?.resumeOriginalName}
                    </TableCell>
                    <TableCell>
                      {application?.applicant?.createdAt.split("T")[0]}
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                          <div className="flex flex-col gap-2">
                            {status.map((status, i) => {
                              return (
                                <div key={i}>
                                  <button>{status}</button>
                                </div>
                              );
                            })}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </tr>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ApplicantsTable;
