import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";
import { setContext } from "apollo-link-context";

import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

const link = new HttpLink({
  uri: "https://api.zorishop.com/graphql/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken");
  // return the headers to the context so httpLink can read them
  console.log(token, "the token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : null,
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

export default client;
