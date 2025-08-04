import { gql } from 'graphql-request';

export const GET_JOBS = gql`
  query GetJobs {
    job {
    displayText
    employmentType
    expirationDate
    jobLevel
    location
    numberPosition
    requirements {
      html
    }
    salary
    benefits {
      html
    }
    description {
      html
    }
    department
    contactEmail
    contentItemId
  }
  }
`;
