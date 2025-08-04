import { gql } from 'graphql-request';

export const GET_JOBS = gql`
  query GetJobs {
    job {
      contactEmail
      contentItemId
      contentType
      department
      description { html }
      displayText
      employmentType
      expirationDate
      featured
      featuredImage {
        files { path url }
      }
      jobLevel
      location
      published
      owner
      salary
      requirements { html }
      benefits { html }
    }
  }
`;
