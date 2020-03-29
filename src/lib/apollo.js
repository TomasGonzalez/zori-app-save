import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://zoriapi-dev.eba-mg9adby9.us-west-2.elasticbeanstalk.com/graphql/"
});

export default client;
