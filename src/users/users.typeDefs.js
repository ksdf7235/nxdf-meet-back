import { gql } from "apollo-server";

export default gql`
  type user {
    id: Int!
    email: String!
    sol_address: String!
    discord_username: String
  }
  type Query {
    users: [user]
    user(email: String!): user
    verifyuser(email: String!): MutationResponse
    sendemailuser(email: String!): MutationResponse
  }
  type Mutation {
    updateWhitelist(
      sol_address: String!
      email: String
      nft_amount: Int
      nationality: String
      discord_username: String
      twitter_username: String
    ): MutationResponse
    createWhitelist(
      sol_address: String!
      email: String
      nft_amount: Int
      nationality: String
      discord_username: String
      twitter_username: String
    ): MutationResponse
    updateWhitelistNft_Amount(sol_address: String!): MutationResponse
  }
`;
