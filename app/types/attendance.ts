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
