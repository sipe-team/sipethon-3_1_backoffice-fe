export interface CreateMemberRequest {
  name: string;
  term: number;
  field: string;
  region: string;
  email: string;
  phone: string;
  birth: string;
}

export interface GetMemberListRequest {
  term: number;
  name?: string;
}

export interface GetMemberListResponse {
  id: number;
  name: string;
  field: string;
  region: string;
  email: string;
  phone: string;
  birth: string;
  isStaff: boolean;
  isDropped: boolean;
}

export interface GetMemberResponse {
  id: number;
  name: string;
  termInfo: TermInfo[];
  field: string;
  region: string;
  email: string;
  phone: string;
  birth: string;
  isDropped: boolean;
}

export interface TermInfo {
  term: number;
  isStaff: boolean;
}

export interface UpdateMemberRequest {
  name: string;
  term: number[];
  field: string;
  region: string;
  email: string;
  phone: string;
  birth: string;
}

export interface DeleteMemberRequest {
  reason: string;
}
