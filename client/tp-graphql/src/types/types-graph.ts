export interface Greeting {
  name: string;
  id: number;
  message: string;
}

export interface GetGreetingByIdResponse {
  data: {
    getGreetingById: {
      greeting: Greeting;
    };
  };
}
