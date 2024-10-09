import {
  Car,
  Person,
  House,
  PersonInput,
  GeneralResult,
  ErrorCase,
} from "../types/types";
import persons from "../mocks/persons.json";
import cars from "../mocks/cars.json";
import houses from "../mocks/houses.json";
import fs from "fs";
import path from "path";

export const resolvers = {
  Query: {
    cars: (): GeneralResult => {
      if (cars.length === 0) {
        return {
          cars: cars,
          message: "No cars found",
          status: 404,
        };
      }
      return { cars: cars, message: "Cars found", status: 200 };
    },
    car: (_: any, args: { id: string }): Car | ErrorCase => {
      const { id } = args;
      return (
        cars.find((car: Car): boolean => car.id === id) || {
          message: "Car not found",
          errorCode: 404,
        }
      );
    },
    houses: (): GeneralResult => {
      if (houses.length === 0) {
        return {
          houses: houses,
          message: "No houses found",
          status: 404,
        };
      }
      return {
        houses: houses,
        message: "Houses found",
        status: 200,
      };
    },
    house: (_: any, args: { id: string }): House | ErrorCase => {
      const { id } = args;
      return (
        houses.find((house: House): boolean => house.id === id) || {
          message: "House not found",
          errorCode: 404,
        }
      );
    },
    getPersonById: (_: any, args: { id: string }): Person | ErrorCase => {
      const { id } = args;
      const person = persons.find((person: Person) => person.id === id);
      return person || { message: "Person not found", errorCode: 404 };
    },
    persons: (): GeneralResult => {
      if (persons.length === 0) {
        return {
          persons: persons,
          message: "No persons found",
          status: 404,
        };
      }
      return {
        persons: persons,
        message: "Persons found",
        status: 200,
      };
    },
  },
  PersonResult: {
    __resolveType(obj: any) {
      if (obj.errorCode) {
        return "ErrorCase";
      }
      return "Person";
    },
  },
  Person: {
    car: (parent: Person): Car[] | [] => {
      return cars.filter((car: Car) => car.owner === parent.id) || [];
    },
    house: (parent: Person): House[] | [] => {
      return houses.filter((house: House) => house.owner === parent.id) || [];
    },
  },
  Mutation: {
    addPerson(_: any, args: { person: PersonInput }): Person {
      const { person } = args;
      const { car, house, ...personData } = person;

      let newPerson = {
        ...personData,
        id: Math.random().toString(36).substr(2, 9),
      };

      const personsJson = JSON.parse(JSON.stringify(persons));
      personsJson.push(newPerson);

      fs.writeFileSync(
        path.join(__dirname, "../mocks/persons.json"),
        JSON.stringify(personsJson)
      );

      if (car) {
        const newCar = {
          ...car,
          id: Math.random().toString(36).substr(2, 9),
          owner: newPerson.id,
        };
        const carsJson = JSON.parse(JSON.stringify(cars));
        carsJson.push(newCar);
        fs.writeFileSync(
          path.join(__dirname, "../mocks/cars.json"),
          JSON.stringify(carsJson)
        );
      }

      if (house) {
        const newHouse = {
          ...house,
          id: Math.random().toString(36).substr(2, 9),
          owner: newPerson.id,
        };
        const housesJson = JSON.parse(JSON.stringify(houses));
        housesJson.push(newHouse);
        fs.writeFileSync(
          path.join(__dirname, "../mocks/houses.json"),
          JSON.stringify(housesJson)
        );
      }

      return newPerson;
    },
  },
};
