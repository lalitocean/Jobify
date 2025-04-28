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
import {MoreHorizontal} from "lucide-react";

const RecruiterJobTable = () => {
  return (
    <>
      <div className="py-5 ">
        <Label className="text-2xl font-bold">Created Jobs </Label>
      </div>
      <div className="border rounded-2xl overflow-hidden p-1 bg-gray-50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCell>
              <Avatar>
                <AvatarImage>Logo</AvatarImage>
              </Avatar>
            </TableCell>
            <TableCell> Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell className="cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-32">
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

export default RecruiterJobTable;
