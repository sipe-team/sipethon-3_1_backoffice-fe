import { deleteMember } from '~/apis/member';
import { Button } from '../ui/button';
import AlertDialogLayout from './AlertDialogLayout';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {
  id: number;
  userName: string;
}

export default function 회원제명Modal({ id, userName }: Props) {
  const queryClient = useQueryClient();

  const [reason, setReason] = useState('');

  const { mutateAsync } = useMutation({
    mutationFn: deleteMember,
  });

  const onDelete = async (reason: string) => {
    await mutateAsync({ id, request: { reason } });
    queryClient.invalidateQueries({
      queryKey: ['member-detail'],
    });
  };
  return (
    <AlertDialogLayout
      title="회원제명"
      trigger={<Button>회원 제명</Button>}
      onConfirm={() => {
        onDelete(reason);
      }}
    >
      <div className="flex flex-col gap-2">
        <div>{userName}님을 제명하시겠습니까? 해당 폼을 제출한 다음에는 되돌릴 수 없습니다.</div>
        <div>
          <span className="text-black text-base ">제명 사유</span>
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
