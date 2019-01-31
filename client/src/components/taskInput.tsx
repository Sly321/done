import React from 'react'
import { Query, MutationFn } from 'react-apollo'
import gql from 'graphql-tag'
import { QueryWrapper } from '../pages/tasks'

export interface Props {
    action: MutationFn<any, { subject: string; ownerId: any }>
    userId: string
}

const getUserById = gql`
    query User($id: ID!) {
        user(where: { id: $id }) {
            id
        }
    }
`

export default function TaskInput({ action, userId }: Props) {
    return (
        <Query query={getUserById} variables={{ id: userId }}>
            {queryResult => (
                <QueryWrapper {...queryResult}>
                    {({ data: { user } }) => {
                        console.debug(`hello`, user)
                        return (
                            <button onClick={() => action({ variables: { subject: 'Hallo', ownerId: user.id } })}>
                                content
                            </button>
                        )
                    }}
                </QueryWrapper>
            )}
        </Query>
    )
}
