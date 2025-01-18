import 회원제명Modal from '~/components/modals/회원제명Modal';
import type { Route } from './+types/member.$id';
import 활동점수 from '~/components/member/attendance-point/활동점수';
import { Member } from '~/types/member';
import UserInfo from '~/components/member/user-info/UserInfo';

const dummyUserInfo: Member = {
  id: 1,
  name: '이지원',
  termInfo: [
    {
      term: 3,
      isStaff: true,
    },
  ],
  field: 'FE',
  region: '석촌',
  email: 'jison@mail.com',
  phone: '010-1111-2222',
  isDropped: true,
  reason: '지각 많이함',
};

export default function MemberDetailPage({ params }: Route.ComponentProps) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-[24px] font-medium text-slate-800">{dummyUserInfo.name}</span>
        <회원제명Modal id={Number(params.id)} userName={dummyUserInfo.name} />
      </div>
      <div className="flex w-full gap-4">
        <UserInfo userInfo={dummyUserInfo} />
        <활동점수 />
      </div>
    </div>
  );
}
