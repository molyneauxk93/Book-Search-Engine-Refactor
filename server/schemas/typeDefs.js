const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query { 
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int!
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type Auth { 
    token: ID!
    user: User
  }

  input BookInput {
    bookId: ID!
    authors: [String]
    title: String
    description: String
    image: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User 
  }
`;

module.exports = typeDefs;
