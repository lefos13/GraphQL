import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./queries/typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
