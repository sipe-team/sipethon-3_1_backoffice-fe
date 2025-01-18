import { useState } from 'react';
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '~/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from '~/components/ui/pagination';

import type { MemberInfo } from 'app/components/member/list/TableSection/MemberInfo';

export default function TableSection({ memberInfo }: { memberInfo: MemberInfo[] }) {
  /* 회원상태 관리 */
  const getMemberStatus = (member: MemberInfo) => {
    if (member.isDropped) {
      return '제명 회원';
    }
    return member.isStaff ? '운영진' : '일반 회원';
  };

  /* 페이징 */
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10; // 한 페이지당 불러올 데이터 수
  const totalPages = Math.ceil(memberInfo.length / membersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = memberInfo.slice(indexOfFirstMember, indexOfLastMember);

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem
          key={i}
          className={i === currentPage ? 'bg-gray-200 hover:bg-gray-300' : ''}
        >
          <PaginationLink href="#" onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return items;
  };

  return (
    <>
      {memberInfo.length > 0 && (
        <div className="pb-10 text-black">
          <Table className="text-center">
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead className="text-center">고유번호</TableHead>
                <TableHead className="text-center">이름</TableHead>
                <TableHead className="text-center">상태</TableHead>
                <TableHead className="text-center">직군</TableHead>
                <TableHead className="text-center">거주지</TableHead>
                <TableHead className="text-center">생년월일</TableHead>
                <TableHead className="text-center">이메일</TableHead>
                <TableHead className="text-center">연락처</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-white">
              {currentMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{getMemberStatus(member)}</TableCell>
                  <TableCell>{member.field}</TableCell>
                  <TableCell>{member.region}</TableCell>
                  <TableCell>{member.birth}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* 페이징 */}
          <div className="flex justify-center mt-4">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                  </PaginationItem>
                )}
                {renderPaginationItems()}
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext href="#" onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </>
  );
}
