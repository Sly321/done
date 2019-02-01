import React from 'react'
import { Mutation } from 'react-apollo'
import { createTask } from '../../core/queries'
import TaskInput from '../../components/taskInput'
import { Refetch } from '../../components/queryWrapper'

export interface Props<T, S> {
    userId: string
    refetch: Refetch<T, S>
}

export default function CreateTask<T, S>({ userId, refetch }: Props<T, S>) {
    return (
        <Mutation mutation={createTask}>
            {(createTaskAction, { data }) => {
                if (data) {
                    console.log(data)
                }

                const handleAction = (args: { subject: string; ownerId: string }) => {
                    createTaskAction({ variables: args }).then(() => refetch())
                }

                return <TaskInput action={handleAction} userId={userId} />
            }}
        </Mutation>
    )
}
