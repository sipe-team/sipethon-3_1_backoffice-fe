import axios from 'axios';
import {
  AttendancePoint,
  GenerateQRCodeResponse,
  GenerateQRCodeRequest,
  GetPhaseRequest,
  GetPhaseResponse,
  AttendancePointRequest,
} from '~/types/attendance';

const http = axios.create({
  baseURL: 'https://backoffice.conects.com',
});

export const getAttendancePointList = async ({ term, memberId }: AttendancePointRequest) => {
  const { data } = await http.get<AttendancePoint>('/api/attendance/points', {
    params: {
      memberId,
      term,
    },
  });
  return data;
};

// Phase 리스트 조회
export const getPhaseList = async (request: GetPhaseRequest) => {
  const { data } = await http.get<GetPhaseResponse[]>(
    `https://backoffice.conects.com/api/attendance/phase`,
    {
      params: request,
    },
  );
  return data;
};

// QR 코드 생성
export const generateQRCode = async (request: GenerateQRCodeRequest) => {
  const { data } = await http.post<GenerateQRCodeResponse>(
    'https://backoffice.conects.com/api/attendance/qrCode',
    request,
  );
  return data;
};
