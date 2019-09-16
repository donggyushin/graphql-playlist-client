import React from 'react'
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { getBooksQuery } from '../booklist/booklist';

const getAuthorsQuery = gql`
{
    authors {
      id
      name
    }
  }
`

const addBookMutation = gql`
mutation($name:String!, $genre:String!, $authorId:String!) {
    addBook(name:$name, genre:$genre, authorId:$authorId){
      id
      name
      genre
      author {
        name
        id
        age
      }
    }
  }
`

const Container = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`

const Row = styled.div`
    display:flex;
`

const Label = styled.div``

const Input = styled.input``

const Select = styled.select``

const Option = styled.option``

const Button = styled.button``

class AddBookComponent extends React.Component {
    state = {
        bookName: "",
        genre: "",
        authorId: ""
    }
    render() {
        const { bookName, genre, authorId } = this.state;
        const { loading, authors } = this.props.getAuthorsQuery;
        const { handleInput, plusButtonClicked } = this;
        return <Container>
            <Row>
                <Label>
                    Book Name:
            </Label>
                <Input onChange={handleInput} name={'bookName'} value={bookName} />
            </Row>
            <Row>
                <Label>
                    Genre:
            </Label>
                <Input onChange={handleInput} name={'genre'} value={genre} />
            </Row>
            <Row>
                <Select onChange={handleInput} name={'authorId'} value={authorId}>
                    <Option value={""}>
                        Select Author...
                    </Option>
                    {loading === false && authors.map(author => {
                        return <Option key={author.id} value={author.id}>{author.name}</Option>
                    })}
                </Select>
            </Row>
            <Button onClick={plusButtonClicked}>+</Button>
        </Container>
    }

    plusButtonClicked = () => {
        const { bookName, genre, authorId } = this.state;
        console.log(this.props)
        const { addBookMutation } = this.props;
        addBookMutation({
            variables: {
                name: bookName,
                genre,
                authorId
            },
            refetchQueries: [
                { query: getBooksQuery }
            ]
        })
        this.setState({
            bookName: "",
            genre: "",
            authorId: ""
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBookComponent)