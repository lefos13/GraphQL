import { Car, Person, House, PersonInput, HouseInput } from "../types/types";
import persons from "../mocks/persons.json";
import cars from "../mocks/cars.json";
import houses from "../mocks/houses.json";
import fs from "fs";
import path from "path";

export const resolvers = {
  Query: {
    cars: (): Car[] | [] => {
      return cars;
    },
    car: (_: any, args: { id: string }): Car | null => {
      const { id } = args;
      return cars.find((car: Car): boolean => car.id === id) || null;
    },
    houses: (): House[] | [] => {
      return houses;
    },
    house: (_: any, args: { id: string }): House | null => {
      const { id } = args;
      return houses.find((house: House): boolean => house.id === id) || null;
    },
    getPersonById: (_: any, args: { id: string }): Person | null => {
      const { id } = args;
      const person = persons.find((person: Person) => person.id === id);
      return person || null;
    },
  },
  Person: {
    car: (parent: Person): Car[] | [] => {
      console.log(parent);
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
