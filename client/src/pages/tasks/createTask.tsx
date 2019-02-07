import React from 'react'
import { Mutation } from 'react-apollo'
import TaskInput from '../../components/taskInput'
import { createTask } from '../../core/queries'
import { withRefetch } from '../../provider/refetch/RefetchConsumer'
import { RefetchContext } from '../../provider/refetch/RefetchContext'
import Error from '../../components/error'

export interface Props {
    userId: string
}

function CreateTask({ userId, refetch }: Props & RefetchContext) {
    return (
        <Mutation mutation={createTask}>
            {(createTaskAction, { data, error }) => {
                if (data) {
                    console.log(data)
                }

                const handleAction = (args: { subject: string; ownerId: string; important: boolean }) => {
                    createTaskAction({ variables: args }).then(() => refetch())
                }

                return (
                    <>
                        <TaskInput action={handleAction} userId={userId} />
                        {error && <Error error={error} />}
                    </>
                )
            }}
        </Mutation>
    )
}

export default withRefetch(CreateTask)
