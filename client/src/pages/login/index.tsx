import React from 'react'
import './login.css'
import DefaultClient, { ApolloClient, gql } from 'apollo-boost'
import { ApolloProvider, Mutation } from 'react-apollo'

export interface Props {}

const adduser = gql`
    mutation {
        createUser(data: { email: "a" }) {
            id
        }
    }
`

export default function Login({  }: Props) {
    const client = new DefaultClient({
        uri: 'http://localhost:4466',
    })

    return (
        <ApolloProvider client={client}>
            <div className="login">
                <p>Hey, scheint als hättest du noch keine UserId, möchtest du dir eine Erstellen?</p>
                <Mutation mutation={adduser}>
                    {(addUserAction, { data }) => (
                        <button type="submit" className="login-button" onClick={() => addUserAction()}>
                            User erstellen
                        </button>
                    )}
                </Mutation>
            </div>
        </ApolloProvider>
    )
}
