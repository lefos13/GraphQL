export interface ErrorCase {
  message: string;
  errorCode: number;
}

export interface Person {
  name: string;
  id: string;
}
export interface MainLevel {
  person?: Person;
  error?: ErrorCase;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  seats: number;
  color: string;
  owner: string;
}

export interface House {
  id: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  rooms: number;
  bathrooms: number;
  builtDate: string;
  owner: string;
}
export interface HouseInput {
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  rooms: number;
  bathrooms: number;
  builtDate: string;
}

export interface PersonInput {
  name: string;
  age: number;
  car: CarInput;
  house: HouseInput;
}

export interface CarInput {
  make: string;
  model: string;
  year: number;
  seats: number;
  color: string;
}

export interface GeneralResult {
  message?: string;
  status: number;
  persons?: Person[];
  houses?: House[];
  cars?: Car[];
}
