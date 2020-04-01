import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: "https://api.zorishop.com/graphql/"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;
