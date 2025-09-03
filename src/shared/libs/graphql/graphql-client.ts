import { GraphQLClient } from 'graphql-request';

export const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!
);

// 토큰 갱신
export const setGraphqlToken = (token?: string) => {
  if (token) {
    graphqlRequestClient.setHeader('Authorization', `Bearer ${token}`);
  }
};

export const clearGraphqlToken = () => {
  graphqlRequestClient.setHeaders({}); // 헤더 제거
};

export default undefined;
