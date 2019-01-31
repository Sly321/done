import React from 'react'
import { ApolloError } from 'apollo-boost'

export interface Props {
    error: ApolloError
}

export default function Error({ error }: Props) {
    return (
        <>
            <div>If you can't fix it</div>
            <pre>{error}</pre>
        </>
    )
}
