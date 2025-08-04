import { GraphQLClient } from 'graphql-request';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const tokenEndpoint = `${API_BASE_URL}/connect/token`;
const graphqlEndpoint = `${API_BASE_URL}/api/graphql`;

interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

let graphQLClient: GraphQLClient;

const getTokenClient = async (): Promise<string> => {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
        grant_type: process.env.NEXT_PUBLIC_AUTH_GRANT_TYPE || 'password',
        username: process.env.NEXT_PUBLIC_AUTH_USERNAME!,
        password: process.env.NEXT_PUBLIC_AUTH_PASSWORD!,
        client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET!,
        scopes: process.env.NEXT_PUBLIC_AUTH_SCOPE || 'profile',
    }),
  });

  if (!response.ok) {
    throw new Error(`Token request failed: ${response.status}`);
  }

  const data: TokenResponse = await response.json();
  return data.access_token;
};

export const getGraphQLClient = async (): Promise<GraphQLClient> => {
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
