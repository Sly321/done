import DefaultClient from 'apollo-boost'
import React from 'react'
import { ApolloProvider, Query, QueryResult } from 'react-apollo'
import '../../App.css'

import { QueryWrapper } from '../../components/queryWrapper'
import TaskList from '../../components/taskList'
import { getOpenTasks, getTasksDoneToday } from '../../core/queries'
import TaskConverter from '../../core/TaskConverter'
import CreateTask from './createTask'
import { RefetchContext } from '../../provider/refetch/RefetchContext'
import { withRefetch } from '../../provider/refetch/RefetchConsumer'
import { TaskResponse } from '../../core/types'

export interface Props {
    userId: string
}

function Tasks({ userId, addRefetch }: Props & RefetchContext) {
    const client = new DefaultClient({
        uri: 'http://localhost:4466',
    })

    return (
        <ApolloProvider client={client}>
            <h2>🖋 Add</h2>
            <CreateTask userId={userId} />
            <h2>Open</h2>
            <Query query={getOpenTasks} variables={{ id: userId }}>
                {(queryResult: QueryResult<{ tasks: Array<TaskResponse> }>) => (
                    <QueryWrapper {...queryResult}>
                        {({ data: { tasks }, refetch }) => {
                            addRefetch('openTasks', refetch)
                            return <TaskList tasks={tasks.map(TaskConverter.responseToModel)} />
                        }}
                    </QueryWrapper>
                )}
            </Query>
            <h2>Done Today</h2>
            <Query query={getTasksDoneToday} variables={{ id: userId }}>
                {(queryResult: QueryResult<{ tasks: Array<TaskResponse> }>) => (
                    <QueryWrapper {...queryResult}>
                        {({ data: { tasks }, refetch }) => {
                            addRefetch('tasksDoneToday', refetch)
                            return <TaskList tasks={tasks.map(TaskConverter.responseToModel)} />
                        }}
                    </QueryWrapper>
                )}
            </Query>
        </ApolloProvider>
    )
}

export default withRefetch(Tasks)
