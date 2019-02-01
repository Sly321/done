import React from 'react'
import { dateToLocaleString } from '../core/DateUtils'
import TaskModel from '../core/TaskModel'
import Important from './important'
import Subject from './subject'
import Task from './task'
import { Refetch } from './queryWrapper'

export interface Props<T, S> {
    refetch: Refetch<T, S>
    tasks: Array<TaskModel>
}

export default function TaskList<T, S>({ tasks, refetch }: Props<T, S>) {
    if (!tasks.length) {
        return <p>Nichts zu tun? Dekadent.</p>
    }

    tasks.sort((a, b) => {
        // TODO implement important etc.
        // important > non important
        // fälligkeit soon > not soon
        return b.createdAt.getTime() - a.createdAt.getTime()
    })

    return (
        <>
            {tasks.map(({ id, createdAt, subject, important }) => {
                return (
                    <Task taskId={id} key={id} refetch={refetch}>
                        <Important important={important} id={id} />
                        <Subject>{subject}</Subject>
                        <div className="task-created-at">{dateToLocaleString(createdAt)}</div>
                    </Task>
                )
            })}
        </>
    )
}
