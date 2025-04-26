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
import {useSelector} from "react-redux";

const CompaniesTable = () => {
  const {companies} = useSelector((store) => store.company);

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
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies?.map((company) => (
              <tr key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company?.logo}></AvatarImage>
                  </Avatar>
                </TableCell>
                <TableCell> {company.name}</TableCell>
                <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent>
                      <div>
                        <button>Edit</button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CompaniesTable;
