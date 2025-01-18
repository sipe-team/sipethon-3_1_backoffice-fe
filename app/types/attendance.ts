export interface AttendancePoint {
  points: number;
  maxPoints: number;
  pointHistories: Array<PointHistory>;
}

export interface AttendancePointRequest {
  memberId: number;
  term: number;
}

export interface PointHistory {
  phase: number;
  date: string;
  type: string;
  point: string;
  reason: string;
}

export interface AttendanceType {
  term?: number | null; //기수
  phase?: number | null; //회차
  date?: string | null; //회차 날짜
  content?: string | null; //내용
  startTime?: string | null; //시작 시간 25.01.11 14:00
  lateTime?: string | null; //지각 시간
  absenceTime?: string | null; //결석 시간
}

export interface GetPhaseRequest {
  term: number;
}

export interface GetPhaseResponse {
  phase: number;
  date: string; // "25.01.11" 형식
}

export interface GenerateQRCodeRequest {
  term: number;
  phase: number;
  startTime: string; // "25.01.11 14:00" 형식
  lateTime: string;
  absenceTime: string;
}

export interface GenerateQRCodeResponse {
  imageUrl: string;
}
