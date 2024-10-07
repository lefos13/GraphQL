import { gql } from "apollo-server";

export const typeDefs = gql`
  #graphql
  type Person {
    name: String
    greeting: Greeting
  }

  type Greeting {
    message: String
    name: String
    id: Int!
  }

  type ErrorCase {
    message: String
    errorCode: Int!
  }

  type MainLevel {
    person: Person
    error: ErrorCase
    greeting: Greeting
  }

  type Query {
    getGreetingById(id: Int!): MainLevel
    getPersonById(id: Int!): MainLevel
  }
`;
