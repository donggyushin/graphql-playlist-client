import React, { Component } from 'react'
import styled from 'styled-components';
import BookComponent from './bookComponent';

const Container = styled.div`
    display:flex;
`



class BookList extends Component {
    render() {
        return <Container>
            <BookComponent bookName={'Book Name'} />
        </Container>
    }
}

export default BookList