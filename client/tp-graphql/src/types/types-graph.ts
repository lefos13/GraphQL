export interface Greeting {
  message: string;
  name: string;
  id: string;
}

export interface FetchGreetingResponse {
  data: {
    greeting: Greeting;
  };
}
