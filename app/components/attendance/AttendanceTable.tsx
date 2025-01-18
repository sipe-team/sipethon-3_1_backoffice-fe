import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Button } from '~/components/ui/button';
import { Pencil1Icon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { AttendanceType } from '~/types/attendance';
import { useMutation } from '@tanstack/react-query';
import { generateQRCode } from '~/apis/attendance';
import AttendanceEditFormModal from '~/components/modals/AttendanceEditFormModal';
import QrCodeModal from '~/components/modals/QrCodeModal';

interface AttendanceTableProps {
  attendanceData: AttendanceType[];
}

export default function AttendanceTable({ attendanceData }: AttendanceTableProps) {
  const { mutate } = useMutation({
    mutationFn: async (
      data: Pick<AttendanceType, 'term' | 'phase' | 'startTime' | 'lateTime' | 'absenceTime'>,
    ) =>
      await generateQRCode({
        term: 3,
        phase: 1,
        startTime: '25.01.11 14:00',
        lateTime: '25.01.11 14:10',
        absenceTime: '25.01.11 14:30',
      }),
  });

  const handleEditAttendance = (data) => {
    // TODO: API 호출하여 출석 정보 수정
  };

  const handleGenerateQrCode = (
    data: Pick<AttendanceType, 'term' | 'phase' | 'startTime' | 'lateTime' | 'absenceTime'>,
  ) => {
    mutate({
      term: data.term,
      phase: data.phase,
      startTime: data.startTime,
      lateTime: data.lateTime,
      absenceTime: data.absenceTime,
    });
  };

  return (
    <Table>
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="text-center">회차</TableHead>
          <TableHead className="text-center">내용</TableHead>
          <TableHead className="text-center">시작 시간</TableHead>
          <TableHead className="text-center">지각 기준</TableHead>
          <TableHead className="text-center">결석 기준</TableHead>
          <TableHead className="text-center w-[80px]">수정</TableHead>
          <TableHead className="text-center w-[80px]">생성</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {attendanceData?.map((attendance) => (
          <TableRow key={attendance.phase}>
            <TableCell className="text-center">
              {attendance.phase}회차 ({attendance.date})
            </TableCell>
            <TableCell className="text-center">{attendance.content}</TableCell>
            <TableCell className="text-center">{attendance.startTime}</TableCell>
            <TableCell className="text-center">{attendance.lateTime}</TableCell>
            <TableCell className="text-center">{attendance.absenceTime}</TableCell>
            <TableCell className="text-center">
              <AttendanceEditFormModal
                trigger={
                  <Button variant="ghost" size="icon">
                    <Pencil1Icon />
                  </Button>
                }
                attendance={attendance}
                onSubmit={handleEditAttendance}
              />
            </TableCell>
            <TableCell className="text-center">
              <QrCodeModal
                trigger={
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleGenerateQrCode(attendance)}
                  >
                    <ExternalLinkIcon />
                  </Button>
                }
                qrCode={'/images/qrcode.png'}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
