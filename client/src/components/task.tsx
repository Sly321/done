import React, { KeyboardEvent, ReactNode } from 'react'
import { Mutation } from 'react-apollo'
import { updateTask } from '../core/queries'
import { Refetch } from './queryWrapper'

export interface Props<T, S> {
    children: ReactNode
    refetch: Refetch<T, S>
    taskId: string
}

export default function Task<T, S>({ children, taskId, refetch }: Props<T, S>) {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'i') {
        }
    }

    return (
        <Mutation mutation={updateTask} variables={{ id: taskId }}>
            {(updateTaskAction, { data }) => {
                function handleClick() {
                    updateTaskAction({ variables: { id: taskId } }).then(() => refetch())
                }

                return (
                    <div className="task" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleClick}>
                        {children}
                    </div>
                )
            }}
        </Mutation>
    )
}
