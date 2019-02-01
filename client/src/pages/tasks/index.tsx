import DefaultClient from 'apollo-boost'
import React from 'react'
import { ApolloProvider, Query, QueryResult } from 'react-apollo'
import '../../App.css'
import { QueryWrapper } from '../../components/queryWrapper'
import TaskList from '../../components/taskList'
import { getOpenTasks } from '../../core/queries'
import TaskConverter from '../../core/TaskConverter'
import TaskResponse from '../../core/TaskResponse'
import CreateTask from './createTask'

export interface Props {
    userId: string
}

export default function Tasks({ userId }: Props) {
    const client = new DefaultClient({
        uri: 'http://localhost:4466',
    })

    return (
        <ApolloProvider client={client}>
            <Query query={getOpenTasks}>
                {(queryResult: QueryResult<{ tasks: Array<TaskResponse> }>) => (
                    <QueryWrapper {...queryResult}>
                        {({ data: { tasks }, refetch }) => (
                            <>
                                <CreateTask userId={userId} refetch={refetch} />
                                <TaskList tasks={tasks.map(TaskConverter.responseToModel)} refetch={refetch} />
                            </>
                        )}
                    </QueryWrapper>
                )}
            </Query>
        </ApolloProvider>
    )
}
