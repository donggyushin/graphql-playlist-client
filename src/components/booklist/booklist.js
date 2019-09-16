import React, { Component } from 'react'
import styled from 'styled-components';
import BookComponent from './bookComponent';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
const Container = styled.div`
    display:flex;
`

export const getBooksQuery = gql`
{
    books {
      name
      genre
      id
    }
  }
`

class BookList extends Component {

    render() {
        const { books, loading, error } = this.props.data;
        return <Container>
            {loading ? 'loading...' : books.map(book => <BookComponent key={book.id} bookName={book.name} />)}
        </Container>
    }
}

export default graphql(getBooksQuery)(BookList)