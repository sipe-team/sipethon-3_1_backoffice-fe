export interface MemberInfo {
  id: number; // 고유번호
  name: string; // 이름
  isStaff: boolean; // 운영진 여부
  field: string; // 직군
  region: string; // 거주지
  birth: string; // 생년월일
  email: string; // 이메일
  phone: string; // 연락처
  isDropped: boolean; // 제명 여부
}
