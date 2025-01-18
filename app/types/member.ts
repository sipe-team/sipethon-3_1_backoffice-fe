export interface Member {
  id: number;
  name: string;
  termInfo: Array<TermInfo>;
  field: string;
  region: string;
  email: string;
  phone: string;
  isDropped: boolean;
  reasone: string;
}

export interface TermInfo {
  term: number;
  isStaff: boolean;
}

export interface UpdateMemberRequest {
  name: string;
  termInfo: Array<TermInfo>;
  field: string;
  region: string;
  email: string;
  phone: string;
}

export interface DeleteMemberRequest {
  reason: string;
}
