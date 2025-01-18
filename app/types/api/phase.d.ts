export interface Phase {
  seq: number;
  term: number;
  requirement: string;
  description: string[];
}

export interface UpdateRequirementRequest {
  term: number;
  requirement: string;
  descriptions: string[];
}

interface Faq {
  seq: number;
  term: number;
  question: string;
  answer: string;
}

export interface Faqs {
  faqs: Faq[];
}
