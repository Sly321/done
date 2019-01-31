import React from 'react'
import './login.css'
import DefaultClient, { ApolloClient, gql } from 'apollo-boost'
import { ApolloProvider, Mutation } from 'react-apollo'

export interface Props {}

const adduser = gql`
    mutation {
        createUser {
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
                <Mutation mutation={adduser}>
                    {(addUserAction, { data }) => {
                        if (data) {
                            const url = `${location.origin}?id=${data.createUser.id}`
                            return (
                                <>
                                    <p>
                                        Ein wenig sehr einfach bist du ja schon zu überzeugen nicht wahr? Seisdrum.
                                        Diese Url ist jetzt deine persönliche Einsprungmarke zu deiner TODO App. Du
                                        solltest sie dir abspeichern, wenn sie einmal verloren ist hole ich sie dir
                                        nicht wieder zurück. Echt nicht.
                                    </p>
                                    <a href={url}>{url}</a>
                                </>
                            )
                        }

                        return (
                            <>
                                <p>Hey, scheint als hättest du noch keine UserId, möchtest du dir eine Erstellen?</p>
                                <button type="submit" className="login-button" onClick={() => addUserAction()}>
                                    User erstellen
                                </button>
                            </>
                        )
                    }}
                </Mutation>
            </div>
        </ApolloProvider>
    )
}
