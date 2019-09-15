import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px 20px;
    margin-top: 30px;
    margin-left: 25px;
    border-radius: 2px;
    border: 1px solid #be2edd;
    color: #be2edd;
    font-weight: 200;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color:#e056fd;
        border:1px solid #e056fd;
    }
`

const BookComponent = ({ bookName }) => <Container>
    {bookName}
</Container>

export default BookComponent;