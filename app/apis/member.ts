import axios from 'axios';
import type { DeleteMemberRequest, Member, UpdateMemberRequest } from '~/types/member';

const http = axios.create({
  baseURL: 'https://backoffice.conects.com',
});

export const getMemberDetail = async (id: number) => {
  const { data } = await http.get<Member>(`/api/members/${id}`);
  return data;
};

export const updateMember = async ({
  id,
  request,
}: {
  id: number;
  request: UpdateMemberRequest;
}) => {
  await http.put(`/api/members/${id}`, request);
};

export const deleteMember = async ({
  id,
  request,
}: {
  id: number;
  request: DeleteMemberRequest;
}) => {
  await http.delete(`/api/members/${id}`, {
    data: {
      request,
    },
  });
};
