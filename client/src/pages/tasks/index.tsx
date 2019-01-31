import DefaultClient, { gql, ApolloQueryResult } from 'apollo-boost'
import React, { ReactNode } from 'react'
import { ApolloProvider, Query, QueryResult, Mutation } from 'react-apollo'
import { getTasks } from '../../core/queries'
import TaskResponse from '../../core/TaskResponse'
import TaskList from '../../components/taskList'
import TaskConverter from '../../core/TaskConverter'
import Loading from '../../components/loading'
import Error from '../../components/error'
import TaskInput from '../../components/taskInput'

import '../../App.css'

export interface Props {
    userId: string
}

const addTask = gql`
    mutation CreateTask($subject: String!, $ownerId: ID!) {
        createTask(data: { subject: $subject, owner: { connect: { id: $ownerId } } }) {
            id
        }
    }
`

export function QueryWrapper<T, S>({
    loading,
    error,
    data,
    children,
    refetch,
}: QueryResult<T, S> & {
    children: (
        { data, refetch }: { data: T; refetch: (variables?: S | undefined) => Promise<ApolloQueryResult<T>> },
    ) => ReactNode
}) {
    if (loading) return <Loading />
    if (error) return <Error error={error} />
    return <>{children({ data: data!, refetch })}</>
}

export default function Tasks({ userId }: Props) {
    const client = new DefaultClient({
        uri: 'http://localhost:4466',
    })

    return (
        <ApolloProvider client={client}>
            <Query query={getTasks}>
                {(queryResult: QueryResult<{ tasks: Array<TaskResponse> }>) => (
                    <QueryWrapper {...queryResult}>
                        {({ data: { tasks }, refetch }) => (
                            <>
                                <Mutation mutation={addTask}>
                                    {(createTaskAction, { data }) => {
                                        if (data) {
                                            console.log(data)
                                        }
                                        return <TaskInput action={createTaskAction} userId={userId} />
                                    }}
                                </Mutation>
                                <TaskList tasks={tasks.map(TaskConverter.responseToModel)} />
                            </>
                        )}
                    </QueryWrapper>
                )}
            </Query>
        </ApolloProvider>
    )
}
