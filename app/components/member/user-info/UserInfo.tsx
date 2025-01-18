import React from 'react';
import Edit from '~/components/svg/Edit';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Member } from '~/types/member';
import GreyBox from '../GreyBox';
import Person from '~/components/svg/Person';

interface Props {
  userInfo: Member;
}
const UserInfo = ({ userInfo }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader className="w-full">
        <CardTitle className="flex justify-between w-full align-bottom">
          <span className="text-lg font-bold">기본정보</span>
          <span>
            <Edit />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {userInfo.isDropped && userInfo.reason && (
          <CardDescription>
            <제명사유 reason={userInfo.reason!} />
          </CardDescription>
        )}
        <div className="flex py-[16px] border-b-[1px] border-b-slate-100">
          <span className="w-[72px] font-semibold text-slate-500 text-[14px]">활동기수</span>
          <span>
            <활동기수List terms={userInfo.termInfo} />
          </span>
        </div>
        <div className="flex py-[16px] border-b-[1px] border-b-slate-100">
          <span className="w-[72px] font-semibold text-slate-500 text-[14px]">직군</span>
          <span className="text-[14px] text-slate-800">{userInfo.field}</span>
        </div>
        <div className="flex py-[16px] border-b-[1px] border-b-slate-100">
          <span className="w-[72px]  font-semibold text-slate-500 text-[14px]">거주지</span>
          <span className="text-[14px] text-slate-800">{userInfo.region}</span>
        </div>
        <div className="flex py-[16px] border-b-[1px] border-b-slate-100">
          <span className="w-[72px]  font-semibold text-slate-500 text-[14px]">이메일</span>
          <span className="text-[14px] text-slate-800">{userInfo.email}</span>
        </div>
        <div className="flex py-[16px] ">
          <span className="w-[72px] font-semibold text-slate-500 text-[14px]">연락처</span>
          <span className="text-[14px] text-slate-800">{userInfo.phone}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;

const 활동기수List = ({ terms }: { terms: Member['termInfo'] }) => {
  return (
    <GreyBox>
      {terms.map((term) => (
        <span key={term.term} className='text-[14px] text-slate-800"'>
          {term.term}
          {term.isStaff ? '기 (운영진)' : ''}
        </span>
      ))}
    </GreyBox>
  );
};

const 제명사유 = ({ reason }: { reason: string }) => {
  return (
    <div className="flex gap-[8px] w-full bg-red-50 border-red-100 border-[1px] p-[12px] rounded-md">
      <Person />
      <div>{reason} 사유로 제명된 회원입니다.</div>
    </div>
  );
};
