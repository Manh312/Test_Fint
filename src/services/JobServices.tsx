// services/JobServices.ts
import type { Job } from '@/types/job';

import { getGraphQLClient } from '../graphql/graphqlClient';
import { GET_JOBS } from '../graphql/queries/jobQueries';

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
