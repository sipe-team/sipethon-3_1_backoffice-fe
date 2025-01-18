import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { AttendanceType } from '~/types/attendance';
import AttendanceTable from '~/components/attendance/AttendanceTable';

const mockData: AttendanceType[] = [
  {
    term: 3,
    phase: 1,
    date: '24.10.12',
    content: 'OT',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 2,
    date: '24.10.26',
    content: 'MT',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 3,
    date: '24.11.09',
    content: '사이프챗',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 4,
    date: '24.11.23',
    content: '사이데이션',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 5,
    date: '24.12.07',
    content: '1차 미션 발표',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 6,
    date: '24.12.21',
    content: '사담콘',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 7,
    date: '25.01.04',
    content: '내친소',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 8,
    date: '25.01.18',
    content: '사이프톤',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
  {
    term: 3,
    phase: 9,
    date: '25.02.01',
    content: '2차 미션 발표',
    startTime: '오후 2시',
    lateTime: '오후 2시 10분',
    absenceTime: '오후 2시 30분',
  },
];

export default function Attendance() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">출석 관리</h1>
        <Select defaultValue="3">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="기수 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3기</SelectItem>
            <SelectItem value="2">2기</SelectItem>
            <SelectItem value="1">1기</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <AttendanceTable attendanceData={mockData} />
    </div>
  );
}
