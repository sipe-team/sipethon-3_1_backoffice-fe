import axios from 'axios';
import { Faqs, Phase, UpdateRequirementRequest } from '~/types/api/phase';

const http = axios.create();

const BASE_URL = 'https://backoffice.conects.com';

export const createRequirement = async (requirement: UpdateRequirementRequest) => {
  const { data } = await http.post(`${BASE_URL}/api/recruit/requirement`, requirement);
  return data;
};

export const getRequirements = async (phase: number) => {
  const { data } = await http.get<Phase>(`${BASE_URL}/api/recruit/requirement/${phase}`);
  return data;
};

export const updateRequirement = async (seq: number, requirement: UpdateRequirementRequest) => {
  const { data } = await http.put(`${BASE_URL}/api/recruit/requirement/${seq}`, requirement);
  return data;
};

export const deleteRequirement = async (seq: number) => {
  const { data } = await http.delete(`${BASE_URL}/api/recruit/requirement/${seq}`);
  return data;
};

export const getFaqs = async (phase: number) => {
  const { data } = await http.get<Faqs>(`${BASE_URL}/api/faqs/${phase}`);
  return data;
};

export const createFaq = async (faqs: Faqs) => {
  const { data } = await http.post(`${BASE_URL}/api/faqs`, { faqs });
  return data;
};
