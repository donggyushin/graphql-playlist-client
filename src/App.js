import React from 'react';
import styled from 'styled-components'
import BookList from './components/booklist';

const Main = styled.div``

const Title = styled.h1``

function App() {
  return (
    <Main>
      <Title>
        Graphql Clients Apollo Tutorial
        <BookList />
      </Title>
    </Main>
  );
}

export default App;
