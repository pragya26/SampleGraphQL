// import ApolloServer and gql(graph query language)
// gql tag converts your string into GraphQL strings that can be read by Apollo
import  { ApolloServer, gql } from 'apollo-server';
import   author   from './dataBase/dataBase.js';
import { typeDefs } from './typeDefs/typeDef.js';
import { sampleResolvers } from './resolvers/resolvers.js';



// Creating a apollo server instance with the schemas and resolvers

// schema tell the GraphQL server what data to expect
// schemas are passed into a gql tag. This tag sterilizes type definitions and makes them readable to Apollo Server.
// The Query type lists all the possible queries that can be performed by our server.
// We have two different querries helloWorld  and randomNumberGenerator
// Type of value is defined after colon(:), here hellpWorld return string type and randomNumberGenerator return interger type
// exclaimation mark(!) specifies that the value is required

// GraphQL enables us to create our own types

 const server = new ApolloServer({
  typeDefs:  gql`${typeDefs}`,
  resolvers: sampleResolvers
});

// Start the server at port 8080
server.listen({ port: 8080 }).then(({ url }) => console.log(`GraphQL server running at ${url}`))
