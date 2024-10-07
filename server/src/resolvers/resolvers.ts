import { Greeting, ErrorCase, Person, MainLevel } from "../types/types";
import greetings from "../mocks/greetings.json";
import persons from "../mocks/persons.json";

export const resolvers = {
  Query: {
    getGreetingById: (_: any, args: { id: number }): MainLevel => {
      try {
        const { id } = args;
        const greeting = greetings.find((greeting) => greeting.id === id);
        if (!greeting) {
          throw new Error(`No greeting found with id: ${id}`);
        }
        return { greeting };
      } catch (err: any) {
        return { error: { message: err.message, errorCode: 404 } };
      }
    },
    getPersonById: (_: any, args: { id: number }): MainLevel => {
      try {
        const { id } = args;
        const person = persons.find((person) => person.id === id);
        if (!person) {
          throw new Error(`No person found with id: ${id}`);
        }
        return { person };
      } catch (err: any) {
        return { error: { message: err.message, errorCode: 404 } };
      }
    },
  },
  Person: {
    greeting: (parent: Person): Greeting | null => {
      return greetings.find((greeting) => greeting.id === parent.id) || null;
    },
  },
};
