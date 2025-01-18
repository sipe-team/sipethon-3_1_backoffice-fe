import axios from 'axios';
import { AttendancePoint } from '~/types/attendance';

const http = axios.create();

export const getAttendancePointList = async () => {
  const { data } = await http.get<AttendancePoint>('/api/attendance/points');
  return data;
};
