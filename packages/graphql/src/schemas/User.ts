import { gql } from 'apollo-server'

const userSchema = gql`
    type Query {
        users: [User!]!,
        user: User!
    }

    type User {
        id: ID!
        firstName: String!
        lastname: String!
        email: String!
    }
`

export { userSchema }