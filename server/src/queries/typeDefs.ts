import { gql } from "apollo-server";

export const typeDefs = gql`
  type Car {
    id: ID!
    make: String
    model: String
    year: Int
    seats: Int
    color: String
    owner: ID
  }

  type House {
    id: ID!
    address: String
    city: String
    state: String
    country: String
    zip: String
    rooms: Int
    bathrooms: Int
    builtDate: String
    owner: ID
  }

  type Person {
    id: ID!
    name: String
    age: Int
    car(id: ID): [Car]
    house(id: ID): [House]
  }

  type ErrorCase {
    message: String
    errorCode: Int!
  }

  input HouseInput {
    address: String
    city: String
    state: String
    country: String
    zip: String
    rooms: Int
    bathrooms: Int
    builtDate: String
  }

  input CarInput {
    make: String
    model: String
    year: Int
    seats: Int
    color: String
  }

  input PersonInput {
    name: String
    age: Int
    car: CarInput
    house: HouseInput
  }

  type Mutation {
    addPerson(person: PersonInput): Person
  }

  type Query {
    getPersonById(id: ID!): Person
    cars: [Car]
    car(id: ID!): Car
    houses: [House]
    house(id: ID!): House
  }
`;
