import React from 'react'
import { dateToLocaleString } from '../core/DateUtils'

export interface Props {
    createdAt: Date
    updatedAt: Date
    completed: boolean
}

export default function TimeInfo({ createdAt, completed, updatedAt }: Props) {
    return (
        <div className="task-time-info">
            {completed ? 'Abgehakt' : 'Erstellt'}
            {' um: '}
            {completed ? dateToLocaleString(updatedAt) : dateToLocaleString(createdAt)}
        </div>
    )
}
