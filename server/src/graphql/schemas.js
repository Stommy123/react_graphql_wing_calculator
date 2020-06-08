import { gql } from 'apollo-server-express';

export default gql`
  type WingCount {
    total: Int!
  }

  type CommitOrderResponse {
    success: Boolean!
  }

  input GetWingsInput {
    snacker: Int
    average: Int
    bigEater: Int
  }

  input CommitOrderInput {
    total: Int!
    flavor: WingFlavors
  }

  enum WingFlavors {
    BLACKEND
    BBQ
    BUFFALO
    ATOMIC
  }

  type Query {
    wings(input: GetWingsInput!): WingCount!
  }

  type Mutation {
    commitOrder(input: CommitOrderInput!): CommitOrderResponse!
  }
`;
