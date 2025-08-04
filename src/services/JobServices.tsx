import { getGraphQLClient } from '../graphql/graphqlClient';
import { GET_JOBS } from '../graphql/queries/jobQueries';

export interface Job {
  contactEmail: string;
  contentItemId: string;
  contentType: string;
  department: string;
  description: { html: string };
  displayText: string;
  employmentType: string;
  expirationDate: string;
  featured: boolean;
  featuredImage?: { files: { path: string; url: string }[] };
  jobLevel: string;
  location: string;
  published: boolean;
  owner: string;
  salary?: number;
  requirements: { html: string };
  benefits: { html: string };
}

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const client = await getGraphQLClient();
    const data = await client.request<{ job: Job[] }>(GET_JOBS);
    return data.job;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs');
  }
};
