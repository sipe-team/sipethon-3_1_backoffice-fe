import { deleteMember } from '~/apis/member';
import { Button } from '../ui/button';
import AlertDialogLayout from './AlertDialogLayout';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useState } from 'react';

interface Props {
  id: number;
  userName: string;
}

export default function 회원제명Modal({ id, userName }: Props) {
  const [reason, setReason] = useState('');
  return (
    <AlertDialogLayout
      title="회원제명"
      trigger={<Button>회원 제명</Button>}
      onConfirm={() => {
        deleteMember({ id, request: { reason } });
      }}
    >
      <div className="flex flex-col gap-1">
        <div>{userName}님을 제명하시겠습니까? 해당 폼을 제출한 다음에는 되돌릴 수 없습니다.</div>
        <div>
          <span className="text-black text-md ">제명 사유</span>
          <Textarea
            placeholder="Type your message here."
            onChange={(e) => {
              const reason = e.target.value;
              setReason(reason);
            }}
          />
        </div>
      </div>
    </AlertDialogLayout>
  );
}
