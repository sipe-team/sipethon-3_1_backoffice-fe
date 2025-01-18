import 회원제명Modal from '~/components/modals/회원제명Modal';
import type { Route } from './+types/member.$id';
import 활동점수 from '~/components/member/attendance-point/활동점수';
import Layout from '~/components/layout/Layout';
import UserInfo from '~/components/member/user-info/UserInfo';
import { useQuery } from '@tanstack/react-query';
import { getMemberDetail } from '~/apis/member';
import { getAttendancePointList } from '~/apis/attendance';
import { useState } from 'react';

export default function MemberDetailPage({ params }: Route.ComponentProps) {
  const [selected기수, setSelected기수] = useState('3');

  const { data: userInfo } = useQuery({
    queryKey: ['member-detail', params.id],
    queryFn: () => getMemberDetail(Number(params.id)),
  });

  const { data: attendancePoint } = useQuery({
    queryKey: ['attendance'],
    queryFn: () =>
      getAttendancePointList({ term: Number(selected기수), memberId: Number(params.id) }),
  });

  if (!userInfo || !attendancePoint) return null;
  return (
    <Layout
      breadcrumbs={[
        { label: 'SIPE', path: '/' },
        { label: '회원 정보 관리', path: '/member' },
        { label: userInfo.name, path: `/member/${params.id}` },
      ]}
    >
      <div className="p-[24px]">
        <div className="flex justify-between mb-4">
          <span className="text-[24px] font-medium text-slate-800">{userInfo.name}</span>
          {!userInfo.isDropped && <회원제명Modal id={Number(params.id)} userName={userInfo.name} />}
        </div>
        <div className="flex w-full gap-4">
          <UserInfo userInfo={userInfo} />
          <활동점수
            attendancePoint={attendancePoint}
            selected기수={selected기수}
            onChange={(v) => {
              setSelected기수(v);
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
