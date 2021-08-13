import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import {client} from "./apollo/client"



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);