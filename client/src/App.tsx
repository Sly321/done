import ApolloClient, { PresetConfig } from 'apollo-boost'
import React, { Component, ReactNode } from 'react'
import { ApolloProvider, Query, QueryResult } from 'react-apollo'
import './App.css'
import Error from './components/error'
import Loading from './components/loading'
import TaskList from './components/taskList'
import { getTasks } from './core/queries'
import TaskConverter from './core/TaskConverter'
import TaskResponse from './core/TaskResponse'
function QueryWrapper<T>({ loading, error, data, children }: QueryResult<T> & { children: (data: T) => ReactNode }) {
    if (loading) return <Loading />
    if (error) return <Error error={error} />
    return <>{children(data!)}</>
}

class App extends Component {
    render() {
        const client = new ApolloClient({
            uri: 'http://localhost:4466',
        })

        return (
            <ApolloProvider client={client}>
                <Query query={getTasks}>
                    {(queryResult: QueryResult<{ tasks: Array<TaskResponse> }>) => (
                        <QueryWrapper {...queryResult}>
                            {({ tasks }) => <TaskList tasks={tasks.map(TaskConverter.responseToModel)} />}
                        </QueryWrapper>
                    )}
                </Query>
            </ApolloProvider>
        )
    }
}

export default App
