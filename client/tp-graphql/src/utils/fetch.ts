import { GetGreetingByIdResponse, Greeting } from "../types/types-graph";

const GRAPHQL_URL = "http://localhost:9000/";
const GET_GREETING_BY_ID = `
  query GetGreetingById($id: Int!) {
    getGreetingById(id: $id) {
      greeting {
        name
        id
        message
      }
    }
  }
`;

export async function fetchGreeting(id: number): Promise<Greeting> {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: GET_GREETING_BY_ID,
      variables: { id },
    }),
  });

  const { data }: GetGreetingByIdResponse = await response.json();
  return data.getGreetingById.greeting;
}
