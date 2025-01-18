import axios from 'axios'
import type { Member } from '~/types/member'

const http = axios.create()

export const getMemberDetail = async (id:number) => {
  const {data} = await http.get<Member>(`/api/members/${id}`)
  return data
}

export const updateMember = async (id: number) => {
  await http.post(`/api/members/${id}`)
}

export const deleteMember = async (id: number) => {
  await http.delete(`/api/members/${id}`)
}