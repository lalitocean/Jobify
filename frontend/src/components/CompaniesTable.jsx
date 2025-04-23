import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./ui/table";
import {Label} from "./ui/label";
import {Avatar, AvatarImage} from "./ui/avatar";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
import {Edit2, MoreHorizontal} from "lucide-react";

const CompaniesTable = () => {
  return (
    <>
      <div className="py-5">
        <Label className="text-2xl font-bold">Registered Companies </Label>
      </div>
      <div className="border rounded-2xl overflow-hidden p-1">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCell>
              <Avatar>
                <AvatarImage src="https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj"></AvatarImage>
              </Avatar>
            </TableCell>
            <TableCell> Google</TableCell>
            <TableCell> 18/5/25</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex justify-center">
                    <button>Edit</button>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CompaniesTable;
