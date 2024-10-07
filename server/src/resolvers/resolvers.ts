import { Greeting, ErrorCase, Person } from "../types/types";
import greetings from "../mocks/greetings.json";
import persons from "../mocks/persons.json";

export const resolvers = {
  Query: {
    greeting: (_: any, args: { id: number }): Greeting | ErrorCase => {
      try {
        const { id } = args;
        const greeting = greetings.find((greeting) => greeting.id === id);
        if (!greeting) {
          throw new Error(`No greeting found with id: ${id}`);
        }
        return greeting;
      } catch (err: any) {
        return {
          message: err.message,
          errorCode: 404,
        };
      }
    },
    person: (_: any, args: { id: number }): Person | ErrorCase => {
      try {
        const { id } = args;
        const person = persons.find((person) => person.id === id);
        if (!person) {
          throw new Error(`No person found with id: ${id}`);
        }
        return person;
      } catch (err: any) {
        return {
          message: err.message,
          errorCode: 404,
        };
      }
    },
  },
  Person: {
    greeting: (parent: Person): Greeting | null => {
      return greetings.find((greeting) => greeting.id === parent.id) || null;
    },
  },
  MainLevel: {
    __resolveType(obj: any) {
      console.log(obj);
      if (obj.name && obj.id) {
        return "Person";
      }
      if (obj.message && obj.id) {
        return "Greeting";
      }
      if (obj.message && obj.errorCode) {
        return "ErrorCase";
      }
      console.error("Unable to resolve type for object:", obj);
      return null;
    },
  },
};
