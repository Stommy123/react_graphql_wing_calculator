import gql from 'graphql-tag';

export const GetTotalWings = gql`
  query GetTotalWings($input: GetWingsInput!) {
    wings(input: $input) {
      total
    }
  }
`;
