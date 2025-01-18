import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '~/components/ui/table';

export default function TableSection() {
  return (
    <>
      <div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-slate-100">
            <TableRow>
              <TableHead className="w-[100px]">고유번호</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>직군</TableHead>
              <TableHead>거주지</TableHead>
              <TableHead>생년월일</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead className="text-right">연락처</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
