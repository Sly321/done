import React from 'react'
import TaskModel from '../core/TaskModel'
import Important from './important'
import Subject from './subject'
import Task from './task'
import TimeInfo from './timeInfo'

export interface Props {
    tasks: Array<TaskModel>
}

function TaskList({ tasks }: Props) {
    if (!tasks.length) {
        return <p>Nichts</p>
    }

    tasks.sort((a, b) => {
        // TODO implement important etc.
        // important > non important
        // fälligkeit soon > not soon
        return b.important
            ? a.important
                ? (b.completed ? b.updatedAt.getTime() : b.createdAt.getTime()) -
                  (a.completed ? a.updatedAt.getTime() : a.createdAt.getTime())
                : 1
            : -1
    })

    return (
        <>
            {tasks.map(({ id, createdAt, subject, important, completed, updatedAt }) => {
                return (
                    <Task taskId={id} key={id} completed={completed}>
                        <Important important={important} id={id} />
                        <Subject>{subject}</Subject>
                        <TimeInfo createdAt={createdAt} completed={completed} updatedAt={updatedAt} />
                    </Task>
                )
            })}
        </>
    )
}

export default TaskList
