import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "./ui/table";

export const AppliedJobTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4].map((item, i) => (
          <TableRow key={i}>
            <TableCell> Company Name</TableCell>
            <TableCell> Role</TableCell>
            <TableCell> Date</TableCell>
            <TableCell> Status</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
