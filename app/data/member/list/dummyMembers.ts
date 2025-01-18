import type { MemberInfo } from 'app/components/member/list/TableSection/MemberInfo';

const dummyMembers: MemberInfo[] = [
  {
    id: 1,
    name: '김철수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user1@example.com',
    phone: '010-1234-0001',
    birth: '1990.01.01',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 2,
    name: '이영희',
    field: 'BE',
    region: '서울 강남구',
    email: 'user2@example.com',
    phone: '010-1234-0002',
    birth: '1990.02.02',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 3,
    name: '박민수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user3@example.com',
    phone: '010-1234-0003',
    birth: '1990.03.03',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 4,
    name: '최지우',
    field: 'BE',
    region: '서울 강남구',
    email: 'user4@example.com',
    phone: '010-1234-0004',
    birth: '1990.04.04',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 5,
    name: '정하늘',
    field: 'FE',
    region: '서울 송파구',
    email: 'user5@example.com',
    phone: '010-1234-0005',
    birth: '1990.05.05',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 6,
    name: '강다니엘',
    field: 'BE',
    region: '서울 강남구',
    email: 'user6@example.com',
    phone: '010-1234-0006',
    birth: '1990.06.06',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 7,
    name: '윤아름',
    field: 'FE',
    region: '서울 송파구',
    email: 'user7@example.com',
    phone: '010-1234-0007',
    birth: '1990.07.07',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 8,
    name: '한지민',
    field: 'BE',
    region: '서울 강남구',
    email: 'user8@example.com',
    phone: '010-1234-0008',
    birth: '1990.08.08',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 9,
    name: '송중기',
    field: 'FE',
    region: '서울 송파구',
    email: 'user9@example.com',
    phone: '010-1234-0009',
    birth: '1990.09.09',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 10,
    name: '김태희',
    field: 'BE',
    region: '서울 강남구',
    email: 'user10@example.com',
    phone: '010-1234-0010',
    birth: '1990.10.10',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 11,
    name: '이민호',
    field: 'FE',
    region: '서울 송파구',
    email: 'user11@example.com',
    phone: '010-1234-0011',
    birth: '1990.11.11',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 12,
    name: '박보검',
    field: 'BE',
    region: '서울 강남구',
    email: 'user12@example.com',
    phone: '010-1234-0012',
    birth: '1990.12.12',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 13,
    name: '정우성',
    field: 'FE',
    region: '서울 송파구',
    email: 'user13@example.com',
    phone: '010-1234-0013',
    birth: '1990.01.13',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 14,
    name: '이정재',
    field: 'BE',
    region: '서울 강남구',
    email: 'user14@example.com',
    phone: '010-1234-0014',
    birth: '1990.02.14',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 15,
    name: '김혜수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user15@example.com',
    phone: '010-1234-0015',
    birth: '1990.03.15',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 16,
    name: '이병헌',
    field: 'BE',
    region: '서울 강남구',
    email: 'user16@example.com',
    phone: '010-1234-0016',
    birth: '1990.04.16',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 17,
    name: '송혜교',
    field: 'FE',
    region: '서울 송파구',
    email: 'user17@example.com',
    phone: '010-1234-0017',
    birth: '1990.05.17',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 18,
    name: '전지현',
    field: 'BE',
    region: '서울 강남구',
    email: 'user18@example.com',
    phone: '010-1234-0018',
    birth: '1990.06.18',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 19,
    name: '김수현',
    field: 'FE',
    region: '서울 송파구',
    email: 'user19@example.com',
    phone: '010-1234-0019',
    birth: '1990.07.19',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 20,
    name: '이준기',
    field: 'BE',
    region: '서울 강남구',
    email: 'user20@example.com',
    phone: '010-1234-0020',
    birth: '1990.08.20',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 21,
    name: '박신혜',
    field: 'FE',
    region: '서울 송파구',
    email: 'user21@example.com',
    phone: '010-1234-0021',
    birth: '1990.09.21',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 22,
    name: '김우빈',
    field: 'BE',
    region: '서울 강남구',
    email: 'user22@example.com',
    phone: '010-1234-0022',
    birth: '1990.10.22',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 23,
    name: '이종석',
    field: 'FE',
    region: '서울 송파구',
    email: 'user23@example.com',
    phone: '010-1234-0023',
    birth: '1990.11.23',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 24,
    name: '한효주',
    field: 'BE',
    region: '서울 강남구',
    email: 'user24@example.com',
    phone: '010-1234-0024',
    birth: '1990.12.24',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 25,
    name: '김지원',
    field: 'FE',
    region: '서울 송파구',
    email: 'user25@example.com',
    phone: '010-1234-0025',
    birth: '1990.01.25',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 26,
    name: '이유리',
    field: 'BE',
    region: '서울 강남구',
    email: 'user26@example.com',
    phone: '010-1234-0026',
    birth: '1990.02.26',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 27,
    name: '박서준',
    field: 'FE',
    region: '서울 송파구',
    email: 'user27@example.com',
    phone: '010-1234-0027',
    birth: '1990.03.27',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 28,
    name: '김태리',
    field: 'BE',
    region: '서울 강남구',
    email: 'user28@example.com',
    phone: '010-1234-0028',
    birth: '1990.04.28',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 29,
    name: '이제훈',
    field: 'FE',
    region: '서울 송파구',
    email: 'user29@example.com',
    phone: '010-1234-0029',
    birth: '1990.05.29',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 30,
    name: '박해진',
    field: 'BE',
    region: '서울 강남구',
    email: 'user30@example.com',
    phone: '010-1234-0030',
    birth: '1990.06.30',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 31,
    name: '김고은',
    field: 'FE',
    region: '서울 송파구',
    email: 'user31@example.com',
    phone: '010-1234-0031',
    birth: '1990.07.31',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 32,
    name: '이성경',
    field: 'BE',
    region: '서울 강남구',
    email: 'user32@example.com',
    phone: '010-1234-0032',
    birth: '1990.08.01',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 33,
    name: '박보영',
    field: 'FE',
    region: '서울 송파구',
    email: 'user33@example.com',
    phone: '010-1234-0033',
    birth: '1990.09.02',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 34,
    name: '김유정',
    field: 'BE',
    region: '서울 강남구',
    email: 'user34@example.com',
    phone: '010-1234-0034',
    birth: '1990.10.03',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 35,
    name: '이수경',
    field: 'FE',
    region: '서울 송파구',
    email: 'user35@example.com',
    phone: '010-1234-0035',
    birth: '1990.11.04',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 36,
    name: '박지훈',
    field: 'BE',
    region: '서울 강남구',
    email: 'user36@example.com',
    phone: '010-1234-0036',
    birth: '1990.12.05',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 37,
    name: '김동욱',
    field: 'FE',
    region: '서울 송파구',
    email: 'user37@example.com',
    phone: '010-1234-0037',
    birth: '1990.01.06',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 38,
    name: '이동욱',
    field: 'BE',
    region: '서울 강남구',
    email: 'user38@example.com',
    phone: '010-1234-0038',
    birth: '1990.02.07',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 39,
    name: '박형식',
    field: 'FE',
    region: '서울 송파구',
    email: 'user39@example.com',
    phone: '010-1234-0039',
    birth: '1990.03.08',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 40,
    name: '김재욱',
    field: 'BE',
    region: '서울 강남구',
    email: 'user40@example.com',
    phone: '010-1234-0040',
    birth: '1990.04.09',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 41,
    name: '이재훈',
    field: 'FE',
    region: '서울 송파구',
    email: 'user41@example.com',
    phone: '010-1234-0041',
    birth: '1990.05.10',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 42,
    name: '박재범',
    field: 'BE',
    region: '서울 강남구',
    email: 'user42@example.com',
    phone: '010-1234-0042',
    birth: '1990.06.11',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 43,
    name: '김성규',
    field: 'FE',
    region: '서울 송파구',
    email: 'user43@example.com',
    phone: '010-1234-0043',
    birth: '1990.07.12',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 44,
    name: '이성민',
    field: 'BE',
    region: '서울 강남구',
    email: 'user44@example.com',
    phone: '010-1234-0044',
    birth: '1990.08.13',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 45,
    name: '박성훈',
    field: 'FE',
    region: '서울 송파구',
    email: 'user45@example.com',
    phone: '010-1234-0045',
    birth: '1990.09.14',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 46,
    name: '김민석',
    field: 'BE',
    region: '서울 강남구',
    email: 'user46@example.com',
    phone: '010-1234-0046',
    birth: '1990.10.15',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 47,
    name: '이민석',
    field: 'FE',
    region: '서울 송파구',
    email: 'user47@example.com',
    phone: '010-1234-0047',
    birth: '1990.11.16',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 48,
    name: '박민석',
    field: 'BE',
    region: '서울 강남구',
    email: 'user48@example.com',
    phone: '010-1234-0048',
    birth: '1990.12.17',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 49,
    name: '김현수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user49@example.com',
    phone: '010-1234-0049',
    birth: '1990.01.18',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 50,
    name: '이현수',
    field: 'BE',
    region: '서울 강남구',
    email: 'user50@example.com',
    phone: '010-1234-0050',
    birth: '1990.02.19',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 51,
    name: '박현수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user51@example.com',
    phone: '010-1234-0051',
    birth: '1990.03.20',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 52,
    name: '김지훈',
    field: 'BE',
    region: '서울 강남구',
    email: 'user52@example.com',
    phone: '010-1234-0052',
    birth: '1990.04.21',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 53,
    name: '이지훈',
    field: 'FE',
    region: '서울 송파구',
    email: 'user53@example.com',
    phone: '010-1234-0053',
    birth: '1990.05.22',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 54,
    name: '박지훈',
    field: 'BE',
    region: '서울 강남구',
    email: 'user54@example.com',
    phone: '010-1234-0054',
    birth: '1990.06.23',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 55,
    name: '김지수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user55@example.com',
    phone: '010-1234-0055',
    birth: '1990.07.24',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 56,
    name: '이지수',
    field: 'BE',
    region: '서울 강남구',
    email: 'user56@example.com',
    phone: '010-1234-0056',
    birth: '1990.08.25',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 57,
    name: '박지수',
    field: 'FE',
    region: '서울 송파구',
    email: 'user57@example.com',
    phone: '010-1234-0057',
    birth: '1990.09.26',
    isStaff: false,
    isDropped: false,
  },
  {
    id: 58,
    name: '김지영',
    field: 'BE',
    region: '서울 강남구',
    email: 'user58@example.com',
    phone: '010-1234-0058',
    birth: '1990.10.27',
    isStaff: true,
    isDropped: false,
  },
  {
    id: 59,
    name: '이지영',
    field: 'FE',
    region: '서울 송파구',
    email: 'user59@example.com',
    phone: '010-1234-0059',
    birth: '1990.11.28',
    isStaff: false,
    isDropped: true,
  },
  {
    id: 60,
    name: '박지영',
    field: 'BE',
    region: '서울 강남구',
    email: 'user60@example.com',
    phone: '010-1234-0060',
    birth: '1990.12.29',
    isStaff: false,
    isDropped: false,
  },
];
export default dummyMembers;
