import React from 'react';
import styled from 'styled-components'
import BookList from './components/booklist';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'

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
        <BookList />
        </Title>
      </Main>
    </ApolloProvider>
  );
}

export default App;
