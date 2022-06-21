import   author  from '../dataBase/dataBase.js';

// When a query is called, a resolver with the same name is executed and the API returns the response from the resolver
// The resolvers name must match match with our schemas. Just like we had a Query type in our schemas, we have a Query in our resolvers too.
// Whatever we return in the resolver, the query returns to the client.
// 	Every resolver has access to 4 parameters:
// 1. parent: the previous resolver in the resolver chain, for top-level resolvers  with no parent, this value is obtained from the rootValue function passed to Apollo // Server's constructor usually null.
            // {
                //author(id: "eric-evans") {
                  //name
                //}
            //} For the query above, the author resolver receives a null as the parent argument whereas the name resolver receives the result of the author resolver.
// 2. args:	object that contains all GraphQL arguments provided
// 3.context: object shared across all resolvers that are executing for a particular operation. We can use this to share per-operation state, including authentication information, and anything else to track across resolvers.
//4. info: Contains information about the operation's execution state, including the field name, the path to the field from the root etc.


export const sampleResolvers = {
  // The name of the resolver must match the name of the query in the schema
  Query: {
    // When the helloWorld query is invoked "Hello world, welcome to graphql session" should be returned
    helloWorld: () => "Hello world, welcome to graphql session!",
    // When we make randomNumberGenerator call, it should return a number between 0 and 25
    randomNumberGenerator: () => Math.round(Math.random() * 25),
    queryAuthor: () => author,
    querySingleAuthor: (parent, args) => {
      for(let i = 0; i < author.length; i++) {
        let obj = author[i];
        if(obj.bookName === args.bookName){
          return obj;
        }
      }
      return null;
    }
  },
  Mutation: {
    addAuthor: (parent, args) => { // addAuthor: parent is null, author: parent is resolver result from addAuhtor
      author.push(args);
      return args;
    }
  }
};
