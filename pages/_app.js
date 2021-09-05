import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../styles/index.css';
import 'react-phone-input-2/lib/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
