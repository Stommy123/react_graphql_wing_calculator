import gql from 'graphql-tag';

export const CommitOrder = gql`
  mutation CommitOrder($input: CommitOrderInput!) {
    commitOrder(input: $input) {
      success
    }
  }
`;
