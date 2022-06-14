const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("first server is running");
});
