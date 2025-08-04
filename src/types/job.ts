// types/job.ts
export type Job = {
  contactEmail: string;
  contentItemId: string;
  department: string;
  description: { html: string };
  displayText: string;
  employmentType: string;
  expirationDate: string;
  jobLevel: string;
  location: string;
  numberPosition: number;
  salary?: number;
  requirements: { html: string };
  benefits: { html: string };
};
