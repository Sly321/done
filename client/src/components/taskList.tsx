import React from 'react'
import { dateToLocaleString } from '../core/DateUtils'
import TaskModel from '../core/TaskModel'
import Important from './important'
import Subject from './subject'
import Task from './task'

export interface Props {
    tasks: Array<TaskModel>
}

export default function TaskList({ tasks }: Props) {
    if (!tasks.length) {
        return <p>Nichts zu tun? Dekadent.</p>
    }

    return (
        <>
            {tasks.map(task => {
                return (
                    <Task key={task.id}>
                        <Important important={task.important} id={task.id} />
                        <Subject>{task.subject}</Subject>
                        <div className="task-created-at">{dateToLocaleString(task.createdAt)}</div>
                    </Task>
                )
            })}
        </>
    )
}
