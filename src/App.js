import React from 'react';
import styled from 'styled-components'
import BookList from './components/booklist';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import AddBookComponent from './components/addBook';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


const Main = styled.div``

const Title = styled.h1``

function App() {
  return (
    <ApolloProvider client={client}>
      <Main>
        <Title>
          Graphql Clients Apollo Tutorial
        </Title>
        <BookList />
        <AddBookComponent />
      </Main>
    </ApolloProvider>
  );
}

export default App;
