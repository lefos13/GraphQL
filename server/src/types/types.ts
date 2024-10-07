export type Greeting = {
  message: string;
  name: string;
  id: number;
};

export type ErrorCase = {
  message: string;
  errorCode: number;
};

export type Person = {
  name: string;
  id: number;
};
export interface MainLevel {
  person?: Person;
  error?: ErrorCase;
  greeting?: Greeting;
}
