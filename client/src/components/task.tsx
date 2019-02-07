import React, { KeyboardEvent, ReactNode } from 'react'
import { Mutation } from 'react-apollo'
import { updateTask } from '../core/queries'
import { withRefetch } from '../provider/refetch/RefetchConsumer'
import { RefetchContext } from '../provider/refetch/RefetchContext'
import clsx from 'clsx'

export interface Props {
    children: ReactNode
    taskId: string
    completed: boolean
}

function Task({ children, taskId, refetch, completed }: Props & RefetchContext) {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'i') {
        }
    }

    return (
        <Mutation mutation={updateTask} variables={{ id: taskId, completed: !completed }}>
            {(updateTaskAction, { loading }) => {
                const className = clsx('task', completed && 'completed', loading && 'loading')

                function handleClick() {
                    updateTaskAction().then(() => refetch())
                }

                return (
                    <div className={className} tabIndex={0} onKeyDown={handleKeyDown} onClick={handleClick}>
                        {children}
                    </div>
                )
            }}
        </Mutation>
    )
}

export default withRefetch<Props>(Task)
