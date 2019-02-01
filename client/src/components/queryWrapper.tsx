import React from 'react'
import { QueryResult } from 'react-apollo'
import { ReactNode } from 'react'
import Loading from './loading'
import Error from './error'
import { ApolloQueryResult } from 'apollo-boost'

export type Refetch<T, S> = (variables?: S | undefined) => Promise<ApolloQueryResult<T>>

export function QueryWrapper<T, S>({
    loading,
    error,
    data,
    children,
    refetch,
}: QueryResult<T, S> & {
    children: ({ data, refetch }: { data: T; refetch: Refetch<T, S> }) => ReactNode
}) {
    if (loading) return <Loading />
    if (error) return <Error error={error} />
    return <>{children({ data: data!, refetch })}</>
}
