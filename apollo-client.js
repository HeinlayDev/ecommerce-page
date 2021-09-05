import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.shopcat.me',
  cache: new InMemoryCache(),
});

export default client;
