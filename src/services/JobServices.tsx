import { GraphQLClient, gql } from 'graphql-request';

// Định nghĩa interface
export interface Job {
  contactEmail: string;
  contentItemId: string;
  contentType: string;
  department: string;
  description: {
    html: string;
  };
  displayText: string;
  employmentType: string;
  expirationDate: string;
  featured: boolean;
  featuredImage?: {
    files: {
      path: string;
      url: string;
    }[];
  };
  jobLevel: string;
  location: string;
  published: boolean;
  owner: string;
  salary?: number;
  requirements: {
    html: string;
  };
  benefits: {
    html: string;
  };
}

// Interface cho token response
interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

// Cấu hình endpoint
const tokenEndpoint = 'https://localhost:44300/connect/token';
const graphqlEndpoint = 'https://localhost:44300/api/graphql';

// Lấy token thông qua fetch
const getTokenClient = async (): Promise<string> => {
  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username: 'admin',
        password: '123456@Abc',
        client_id: 'fintweb',
        client_secret: '123456@Abc',
        scopes: 'profile'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw new Error('Failed to fetch authentication token');
  }
};

// GraphQL Client với token động
let graphQLClient: GraphQLClient;

const getGraphQLClient = async (): Promise<GraphQLClient> => {
  if (!graphQLClient) {
    const token = await getTokenClient();
    graphQLClient = new GraphQLClient(graphqlEndpoint, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return graphQLClient;
};

// Query đầy đủ thông tin từ GraphQL
const GET_JOBS = gql`
  query GetJobs {
    job {
      contactEmail
      contentItemId
      contentType
      department
      description {
        html
      }
      displayText
      employmentType
      expirationDate
      featured
      featuredImage {
        files {
          path
          url
        }
      }
      jobLevel
      location
      published
      owner
      salary
      requirements {
        html
      }
      benefits {
        html
      }
    }
  }
`;

// Hàm lấy danh sách công việc
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
