import { FetchGreetingResponse, Greeting } from "../types/types-graph";

const GRAPHQL_URL = "http://localhost:9000/";

export async function fetchGreeting(): Promise<Greeting> {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          greeting {
            message
            name
            id
          }
        }
      `,
    }),
  });

  const { data }: FetchGreetingResponse = await response.json();
  return data.greeting;
}
