import 회원제명Modal from '~/components/modals/회원제명Modal';
import type { Route } from './+types/member.$id';
import Layout from '~/components/layout/Layout';
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
   <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '회원 정보 관리', path: '/member' },
        { label: '이지원', path: `/member/${params.id}` },
      ]}
    >
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-[24px] font-medium text-slate-800">{dummyUserInfo.name}</span>
        <회원제명Modal id={Number(params.id)} userName={dummyUserInfo.name} />
      </div>
      <div className="flex w-full gap-4">
        <UserInfo userInfo={dummyUserInfo} />
        <UserInfo userInfo={dummyUserInfo} />
      </div>
    </div>
    </Layout>
  );
}
