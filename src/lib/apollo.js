import { ApolloClient } from "apollo-client";

import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: "https://api.zorishop.com/graphql/",
  credentials: "include",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: link,
  cache,
});

export default client;
