import axios from 'axios';
import { Faqs, Phase, UpdateRequirementRequest } from '~/types/api/phase';

const http = axios.create();

export const createRequirement = async (requirement: UpdateRequirementRequest) => {
  const { data } = await http.post(`/api/recruit/requirement`, requirement);
  return data;
};

export const getRequirements = async (phase: number) => {
  const { data } = await http.get<Phase[]>(`/api/recruit/requirement/${phase}`);
  return data;
};

export const updateRequirement = async (seq: number, requirement: UpdateRequirementRequest) => {
  const { data } = await http.put(`/api/recruit/requirement/${seq}`, requirement);
  return data;
};

export const deleteRequirement = async (seq: number) => {
  const { data } = await http.delete(`/api/recruit/requirement/${seq}`);
  return data;
};

export const getFaqs = async (phase: number) => {
  const { data } = await http.get<Faqs>(`/api/faqs/${phase}`);
  return data;
};

export const createFaq = async (faqs: Faqs) => {
  const { data } = await http.post(`/api/faqs`, { faqs });
  return data;
};
