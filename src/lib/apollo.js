import { ApolloClient } from "apollo-client";
import { gql } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: "https://lucasconstantino.github.io/graphiql-online/"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

client
  .query({
    query: gql`
      {
        allUsers {
          id
          name
        }
      }
    `
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));

export default client;
