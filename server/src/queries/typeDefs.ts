import { gql } from "apollo-server";

export const typeDefs = gql`
  type Person {
    name: String
    greeting: Greeting
  }

  type Greeting {
    message: String
    name: String
    id: Int
  }

  type ErrorCase {
    message: String
    errorCode: Int
  }

  union MainLevel = Greeting | Person | ErrorCase

  type Query {
    greeting(id: Int!): MainLevel
    person(id: Int!): MainLevel
  }
`;
